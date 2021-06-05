
class ListControl():
    # 初始化构造函数
    def __init__(self, lists):
        self.lists = lists

    # List 遍历
    def listDisplay(self):
        for item in self.lists:
            print("every item value is:" + item)

    # list 长度
    def getListLen(self):
        return len(self.lists)
