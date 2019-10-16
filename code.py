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

#7. Your overall monthly  savings will be the percentage off of your annual salary plus the 4% return divided by 12
#deposit = current_savings *0.04 /12




#This code allows users to entert commas
salaryString = input("Enter your annual salary in thousands for example 40,000:")
salary = float(salaryString.replace(",", "."))

#salary = float(input("Enter your annual salary in thousands:"))
saved = float(input("Enter the percent of your salary, to save as a decimal for example 0.1:"))

total = int(input("Enter the cost of your dream home:"))
#deposit_calculator(Total, Salary, Saved)

house = (f"So your Annual Salary is {salary}")
print(house)
#This will leave you with the amount you will be saving each year.
r = 0.04 
current_savings = salary / saved
print(f"You first will be saving")
#This is what your investment returns
additional_current_savings = current_savings*r / 12
40,000
#This is how much you will be saving each month.
print(f"Each month you will be saving {additional_current_savings:.1f}")