# 1. The cost of the house is total_cost
total_cost = 100 * 1000

# 2. The portion of the total cost needed for a deposit is portion_deposit, to make that easier, assume it to be 20% (0.20).
portion_deposit = 0.20

#3. The current saving towards the house you ahve saved so far.
current_savings = 0

#4. This is the additional 4% that we are gettting from our investement return
#current_savings*r /12

#5. This is your annual salary.
annual_salary = 20 * 1000

#6. This is the percentage of what you are going to be putting topwards your deposit from your annual salary. This will be formatted in decimals.
portion_saved = 0.1

totalHouse = float(input("Enter the cost of your dream home:"))

deposit = totalHouse / 20

#YOU ARE SAVING THIS PRICE NOT COST OF HOUSE
print(f"Your deposit (20%) will be £{deposit}")


#THEIR SALARY
salary= float(input("Enter your annual salary in thousands for example 40000:"))


#THE AMOUNT THEY ARE GONNA SAVE
decimal= float(input("Enter the percentage that you are going to save in decimals for example 0.1 "))

#HOW MUCH THEY GONNA SAVE CONVERTED TO PERCENTAGE
towardshouse = decimal * 100 

#YOUR INVESTEMENT RETURN
r = 0.04
months = 0
savings = 0.0

#THEIR SALARY DIVIDED BY THE PERCENTAGE THEY WILL SAVE 
monthly_savings = salary / towardshouse / 12


print(f"You are saving {towardshouse}% of your income")
print(f"This equates to £{monthly_savings:.1f} per month")


#WORKING OUT HOW MANY MONTHS
while monthly_savings < deposit:
    savings += monthly_savings * r
    savings += monthly_savings 
    months +=1

print(f"{months}")

