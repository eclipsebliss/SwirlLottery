/**
 *SPDX-License-Identifier: GPL-2.0-only
 */

pragma solidity >=0.6.0 <0.8.0;
pragma experimental ABIEncoderV2;
import "openzeppelin-solidity/contracts/math/SafeMath.sol";

contract Ownable {

    address public owner;


    address public feeAccount;

    function feeOwner() public view returns (address) {
        return feeAccount;
    }


    modifier onlyOwner() {
        require(owner == msg.sender, "Ownable: caller is not the owner"); 
        _;
    }

   
    function changeOwner(address _newOwner) public onlyOwner {
        owner = _newOwner;
    }


    function changefeeOwner(address _newFeeOwner) public onlyOwner {
        owner = _newFeeOwner;
    }
}


contract ThreeD is Ownable {
    using SafeMath for uint256; 


    struct Lottery {
        uint256 id; 
        uint256[] numbers; 
        address payable player; 
        uint256 couple; 
        uint256 amount; 
        bool claimed; 
        uint8 prizeType; 
    }


    struct LotteryResult {
        uint256[] numberResult; 
        uint256 prizePool; 
        uint256[] firstWinId; 
        uint256[] secondWinId; 
        uint256[] thirdWinId; 
        uint256 countFirst; 
        uint256 countSecond; 
        uint256 countThird; 
    }


    uint256 public lotteryId;


    uint256 public constant ticketPrice = 0.001 ether;


    uint256 public round = 1;


    uint256[] public threeRandomNumbers;


    uint256 public constant numberRange = 10;


    uint256 public constant lotterySize = 3;


    uint256 public lastExecuted;


    uint256 public prizePool;

    LotteryResult public lotteryResult;


    mapping(uint256 => Lottery) public lotteries;

    mapping(uint256 => LotteryResult) public lotteriesHis;

    mapping(uint256 => mapping(address => Lottery[])) public allHis;


    event BuyLottery(
        uint256 indexed round,
        address indexed player,
        uint256 indexed lotteryId,
        uint256[] numbers,
        uint256 couple,
        uint256 amount
    );


    event DrawLottery(
        uint256[] threeRandomNumbers,
        uint256 prizePool,
        uint256 countFirst,
        uint256 countSecond,
        uint256 countThird
    );

    constructor(address _feeAccount) public {
        owner = msg.sender; 
        feeAccount = _feeAccount; 
    }

    function generateRandomNumbers() private {
        for (uint256 i = 0; i < lotterySize; i++) {
            uint256 randomNumber = uint256(
                keccak256(
                    abi.encodePacked(block.timestamp, block.difficulty, i)
                )
            ) % 10;
            threeRandomNumbers.push(randomNumber);
        }
    }

   
    function buyLottery(
        uint256[] memory _numbers,
        uint256 _couple
    ) public payable {
  
        // require(block.timestamp >= lastExecuted + 600, "Can only buy once every 10 minutes");
        require(msg.value == ticketPrice.mul(_couple),"The ticket price is 0.1 ether.");
        require(_numbers.length == lotterySize,"The number of selected numbers is incorrect.");
        for (uint256 i = 0; i < lotterySize; i++) {
            require(
                _numbers[i] < numberRange,
                "The selected number is out of range."
            );
        }

        require(_couple >= 1, "you must at least buy one couple");

        prizePool = prizePool.add(msg.value); 
        Lottery memory temLottery;
        temLottery = Lottery(
            lotteryId,
            _numbers,
            payable(msg.sender),
            _couple,
            msg.value,
            false,
            0
        );
        lotteries[lotteryId] = temLottery;
        emit BuyLottery(round, msg.sender, lotteryId, _numbers, _couple, msg.value);
        lotteryId++;
    }

    function drawLottery() public returns (bool) {

        restoreRandomNumbers();

        // require(block.timestamp >= lastExecuted + 500, "Can only generate once every 9 minutes");
        // lotteryId = 0，没有人购买，不开奖，继续等待下一个开奖周期
        require(lotteryId > 0, "No bets,will start the next round."); 
        // 上一轮开奖账号已经清空
        require(threeRandomNumbers.length == 0, "The lottery has been drawn.");
        generateRandomNumbers(); // 生成三位随机开奖号
        require(threeRandomNumbers.length == lotterySize,"The number of selected numbers is incorrect.");
        for (uint256 i = 0; i < lotterySize; i++) {
            require(
                threeRandomNumbers[i] < numberRange,
                "The prize opening number is out of range."
            );
        }

        lotteryResult.numberResult = threeRandomNumbers; // 记录开奖数字
        lotteryResult.prizePool = prizePool; // 记录奖池金额

        uint256 countFirst = 0; // 中奖注数，一等奖
        uint256 countSecond = 0; // 中奖注数，二等奖
        uint256 countThird = 0; // 中奖注数，三等奖

        for (uint256 i = 0; i < lotteryId; i++) {
            // 一等奖，三个数字都相同，不限顺序
            if (
                lotteries[i].claimed == false &&
                compareNumbers(lotteries[i].numbers, threeRandomNumbers) == 3
            ) {
                lotteryResult.firstWinId.push(lotteries[i].id); //记录中奖者ID
                lotteries[i].claimed = true; // 设置中奖状态为True
                lotteries[i].prizeType = 1; // 设置中奖类型为1等奖
                allHis[round][lotteries[i].player].push(lotteries[i]);  //同一期下，同一个地址购买及中奖情况
                countFirst = countFirst.add(lotteries[i].couple); // 中奖注数 = 中奖用户的投注注数相加
            } else if (
                // 二等奖，两个数字都相同，不限顺序
                lotteries[i].claimed == false &&
                compareNumbers(lotteries[i].numbers, threeRandomNumbers) == 2
            ) {
                lotteryResult.secondWinId.push(lotteries[i].id); //记录中奖者ID
                lotteries[i].claimed = true; // 设置中奖状态为True
                lotteries[i].prizeType = 2; // 设置中奖类型为2等奖
                allHis[round][lotteries[i].player].push(lotteries[i]);  //同一期下，同一个地址购买及中奖情况
                countSecond = countSecond.add(lotteries[i].couple); // 中奖注数 = 中奖用户的投注注数相加
            } else if (
                // 三等奖，一个数字相同，不限顺序
                lotteries[i].claimed == false &&
                compareNumbers(lotteries[i].numbers, threeRandomNumbers) == 1
            ) {
                lotteryResult.thirdWinId.push(lotteries[i].id); //记录中奖者ID
                lotteries[i].claimed = true; // 设置中奖状态为True
                lotteries[i].prizeType = 3; // 设置中奖类型为3等奖
                allHis[round][lotteries[i].player].push(lotteries[i]);  //同一期下，同一个地址购买及中奖情况 
                countThird = countThird.add(lotteries[i].couple); // 中奖注数 = 中奖用户的投注注数相加
            } else {
                lotteries[i].claimed = false; // 中奖状态保持为false
                lotteries[i].prizeType = 0; // 设置中奖类型保持为没中奖
                allHis[round][lotteries[i].player].push(lotteries[i]);  //同一期下，同一个地址购买及中奖情况 
            }
        }

        // 将中奖人数挂载在公共界面
        lotteryResult.countFirst = countFirst;
        lotteryResult.countSecond = countSecond;
        lotteryResult.countThird = countThird;
        // 派奖
        bonusLottery();
        emit DrawLottery(threeRandomNumbers,prizePool,countFirst,countSecond,countThird);
        return true;
    }

    // 派奖函数
    function bonusLottery() public {
        uint256 firstPool = prizePool.div(100).mul(40); // 一等奖奖池
        uint256 secondPool = prizePool.div(100).mul(20); // 二等奖奖池
        uint256 thirdPool = prizePool.div(100).mul(10); // 三等奖奖池
        uint256 handlingFee = prizePool.div(100).mul(10); // 手续费
        uint256 accPool = prizePool.div(100).mul(20); // 拿出20%放入下一轮奖池

        uint256 firstBalance = 0; // 派奖后一等奖余额
        uint256 secondBalance = 0; // 派奖后二等奖余额
        uint256 thirdBalance = 0; // 派奖后三等奖余额
        if (
            lotteryResult.countFirst > 0 ||
            lotteryResult.countSecond > 0 ||
            lotteryResult.countThird > 0
        ) {
            // 如果一等奖中奖人数不为空
            if (lotteryResult.countFirst > 0) {
                uint256 firstPerPrize = firstPool.div(lotteryResult.countFirst);
                for (uint256 i = 0; i < lotteryResult.firstWinId.length; i++) {
                    lotteries[lotteryResult.firstWinId[i]].player.transfer(
                        firstPerPrize.mul(
                            lotteries[lotteryResult.firstWinId[i]].couple
                        )
                    );
                }
                firstBalance = 0;
            } else {
                firstBalance = firstPool;
            }

            // 如果二等奖中奖人数不为空
            if (lotteryResult.countSecond > 0) {
                uint256 secondPerPrize = secondPool.div(
                    lotteryResult.countSecond
                );
                for (uint256 i = 0; i < lotteryResult.secondWinId.length; i++) {
                    lotteries[lotteryResult.secondWinId[i]].player.transfer(
                        secondPerPrize.mul(
                            lotteries[lotteryResult.secondWinId[i]].couple
                        )
                    );
                }
                secondBalance = 0;
            } else {
                secondBalance = secondPool;
            }

            // 如果三等奖中奖人数不为空
            if (lotteryResult.countThird > 0) {
                uint256 thirdPerPrize = thirdPool.div(lotteryResult.countThird);
                for (uint256 i = 0; i < lotteryResult.thirdWinId.length; i++) {
                    lotteries[lotteryResult.thirdWinId[i]].player.transfer(
                        thirdPerPrize.mul(
                            lotteries[lotteryResult.thirdWinId[i]].couple
                        )
                    );
                }
                thirdBalance = 0;
            } else {
                thirdBalance = thirdPool;
            }
            payable(feeAccount).transfer(handlingFee); // 收取手续费
            // 下一轮的奖金池初始值，等于三个池子剩余的奖金 + 20%的累积奖池
            prizePool = firstBalance + secondBalance + thirdBalance + accPool;
            // 记录这一期的中奖期数和这一期的对应的中奖结果，派奖执行完成才记录
            lotteriesHis[round] = lotteryResult;
            round++; // 期数加1
        } else {
            // 如果三个奖金池都没人中奖
            payable(feeAccount).transfer(handlingFee); // 收取手续费
            // 下一轮的奖金池初始值，等于本期奖池 - 10%的手续费
            prizePool = prizePool - handlingFee;
            // 记录这一期的中奖期数和这一期的对应的中奖结果，派奖执行完成才记录
            lotteriesHis[round] = lotteryResult;
            round++; // 期数加1
        }
        // 清除上一轮状态
        restoreState();
    }

    // 比较两个数字数组中相同的数字个数
    function compareNumbers(uint256[] memory _arr1,uint256[] memory _arr2) private pure returns (uint8) {
        // 开奖数组和用户选择的数组长度必须相同
        require(_arr1.length == _arr2.length,"The number length of selected and opening must same");
        uint8 matches = 0;
        bool[] memory checked = new bool[](3);
        for (uint8 i = 0; i < lotterySize; i++) {
            for (uint8 j = 0; j < lotterySize; j++) {
                if (_arr1[i] == _arr2[j] && !checked[j]) {
                    matches++;
                    checked[j] = true;
                    break;
                }
            }
        }
        return matches;
    }

    // 清空本轮开奖记录
    function restoreState() private {
        // 清除lotteries的值
        for (uint256 i = 0; i < lotteryId; i++) {
            delete lotteries[i];
        }
        delete lotteryResult; // 清空中奖结果
        delete lotteryId; // 清空中奖ID
        delete threeRandomNumbers; // 清空上一轮的中奖号
    }

    // 清空中奖号
    function restoreRandomNumbers() private {
        delete threeRandomNumbers; 
    }

    // 读取历史开奖数字
    function readLastWinNumbers() public view returns (uint256[] memory) {
        return lotteriesHis[round.sub(1)].numberResult;
    }

    // 读取中奖历史
    function readLotteriesHis(uint256 _couple) public view returns(
        uint256[] memory,
        uint256,
        uint256,
        uint256,
        uint256 
    ){
       return (
        lotteriesHis[_couple].numberResult,
        lotteriesHis[_couple].prizePool,
        lotteriesHis[_couple].countFirst,
        lotteriesHis[_couple].countSecond,
        lotteriesHis[_couple].countThird
       );
    } 

    // 读取购买及中奖历史
    function readAllHis(uint256 _round,address _address) public view returns(
        Lottery[] memory
    ){
        Lottery[] memory newLotteryArray = allHis[_round][_address];
        return newLotteryArray;
    }
}