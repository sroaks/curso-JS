precio = "30€"
producto = 'Monitor de 30"'
usuario = "Gonzalo"


p = len(producto)
posidato = producto.find("t")
esta = "30" in precio

concatenado = f'El {producto}, cuesta {precio}'
concatenado2 = "El {}, cuesta {}".format(producto,precio)


print(p)
print(posidato)
print(esta)

print(concatenado)
print(concatenado2)

# eliminar espacios

producto_con_espacio = "     1      Monitor    2    "
print(producto_con_espacio)
print(producto_con_espacio.strip())

# DERECHA O IZQUIERA AÑADIENDO L O R
print(producto_con_espacio.rstrip())
print(producto_con_espacio.lstrip())

print(producto.replace("Monitor","Pantalla"))

print(usuario[0])