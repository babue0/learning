class Car:
  def __init__(self, cor, marca, ano):
    self.cor = cor
    self.marca = marca
    self.ano = ano

  def andar(self):
    print(f"o/a {self.marca} esta em movimento")

  def parar(self):
    print(f"o/a {self.marca} esta parado")


car1 = Car("vermelho", "Ferrari", "2020")
car1.andar()
car1.parar()

print(car1.cor, "/", car1.marca, "/", car1.ano)