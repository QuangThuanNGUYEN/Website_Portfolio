class Student:
    def __init__(self, name, house):
        if not name: 
            raise ValueError ("Missing name!")
        self.name = name
        self.house = house

    def house(self):
        return self.house


    def house(self, house):
        self.house = house


def main():
    student = get_student()
    print(student.name + " from " + student.house)

def get_student():
    name = input("Name: ")
    house = input("House: ")
    try: 
        return Student(name, house)
    except ValueError:
        ...




if __name__ == "__main__":
    main()
