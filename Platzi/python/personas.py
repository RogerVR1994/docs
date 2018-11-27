

class Persona:
	def __init__(self, name, age):
		self.name = name
		self.age = age


	def say_hello(self):
		print('Hello, my name is {} and I\'m {} years old'.format(self.name, self.age))

if __name__ == '__main__':
	person = Persona('Rogelio', 23)
	print(person.name)
	person.say_hello()
