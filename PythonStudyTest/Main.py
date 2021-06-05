from DemoTest.TestClass.TestClass import *

# 数字型列表
# listOfNumber = range(1, 20, 2)
# disPlayList(listOfNumber)

# 字符型列表
listOfNumbers = [
    "student's number " + str(number) for number in range(100086, 100099, 1)
]
ListControls = ListControl(listOfNumbers[:])
ListControls.listDisplay()
