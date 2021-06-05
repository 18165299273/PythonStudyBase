from DemoTest.Until.UntilBase import isNumber
from DemoTest.Until.ListControl import ListControl
from DemoTest.Until.StringControl import StringControl


def disPlayList(listOfNumber):
    for item in listOfNumber:
        if(isNumber(item)):
            print("item is:" + str(item) + "\n")
        else:
            str = StringControl(item)
            print("item is:" + str.LetterUpper() + "\n")
    listone = ListControl(listOfNumber[:])
    return listone.getListLen()
