puntos = 5

puntos += 2
puntos -=1


print(puntos)

n1=1
n2="1"
n3 = 20.3

# string a -> numero / float

print(type(n2)) # str
print(type(int(n2))) # int
print(type(float(n2))) # float

# revisar si un numero es entrero o no

print(isinstance(n3, int)) #false
print(isinstance(n3, str)) #false
print(isinstance(n3, float)) #TRUE
