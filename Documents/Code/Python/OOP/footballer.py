class Footballer:
    def __init__(self, name, age, country, position):
        self.name = name
        self.age = age
        self.country = country
        self.position = position
    
    def dribbling(self):
        print(f"{self.name} is dribbling")
    
    def running(self):
        print(f"{self.name} is running")

    def shoot(self):
        print(f"{self.name}'s gonna shoot")
    
    def scored(self):
        print(f"{self.name} scored")


# messi = Footballer("Messi", 34, "Argentina", "CAM")
# print(type(messi))