PASSWORD = '12345678'

def password_required(func):
	def wrapper():
		name = input('¿Cual es tu nombre?')
		password = input('¿Cual es la contraseña')

		if password == PASSWORD:
			return func(name)
		else:
			print('La contraseña no es correcta')
	return wrapper


@password_required
def needs_password(name):
	print('{} La contraseña es correcta'.format(name))


def upper(func):
	def wrapper(*args, **kwargs):
		result = func(*args, **kwargs)
		return result.upper()
	return wrapper


@upper
def say_my_name(name):
	return 'Hola, {}'.format(name)

if __name__ == '__main__':
	print(say_my_name('Roger'))

