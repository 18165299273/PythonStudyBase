class StringControl():
    def __init__(self, str):
        self.str = str

    # 首字母大写
    def FirstLetterUpper(self):
        return self.str.title()

    def LetterUpper(self):
        return self.str.upper()

    def LetterLower(self):
        return self.str.lower()
