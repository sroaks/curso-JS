import math
import random

N_PI = math.pi

print(math.ceil(5 / 2))
print(math.floor(5 / 2))

# redondear a n dígitos
resultado = round(N_PI, 3)

print(resultado)

# dividendo = divisor * cociente + resto
# cociente
print(10 // 3)
# resto
print(10 % 3)
# funcion integrada divmod() devuelve el [ cociente , resto ]
print(divmod(13,4)) # = (3,1)
# potencias / pow(x,y)
print(2**3)
print(pow(2,3))
# raices
print(math.sqrt(16))

# Aleatorio entre 1 y 6
print(random.randint(1, 6))

"""
for i in range(10):
    print(random.randrange(1,10))

"""
print(random.randrange(10))


