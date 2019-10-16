totalHouse = float(input("Enter the cost of your dream home:"))

deposit = totalHouse / 10 * 2

print(f"Your deposit (20%) will be £{deposit}")



salaryString = input("Enter your annual salary in thousands for example 40000:")
salary = float(salaryString.replace(",", "."))



decimal= float(input("Enter the percentage that you are going to save in decimals for example 0.1 "))

towardshouse = decimal *100 

r = 0.04

new_towardshouse = salary / towardshouse / 12

print(f"You are saving {towardshouse}% of your income")
print(f"This equates to £{new_towardshouse:.1f} per month")


time = totalHouse - new_towardshouse

while new_towardshouse < totalHouse:
    totalHouse += new_towardshouse* r/12
    break

print(f"{totalHouse}")
