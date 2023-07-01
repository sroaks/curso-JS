from datetime import date
from datetime import datetime

today = date.today()

def sumar(a,b):
    print(a+b)

def saludar(nombre="Desconocido...",apellido=" o.O "):
    nombre = input("Comno te llamas pendejo?")
    apellido = input("ok... el apellido tmbn porfa plis:")
    print(f"Hola {nombre} {apellido}")

def año_nacimiento(edad):
    print(today.year-edad)

# LLAMAR FUNCIONES

def inciciar():
    print("Inciciando, saluda")
    saludar()
    edad = input("Cuandtos años tienes_: ")
    año_nacimiento(int(edad))

inciciar()
