class Price:
    price = 10
    discount = "15%"

    def getPrice(self):
        return self.price
    
    def getPriceWithDiscount(self):
        return self.price - ((self.price * int((self.discount)[:2]))/100)


showPrice = Price();

print(showPrice.getPrice(), showPrice.getPriceWithDiscount())

