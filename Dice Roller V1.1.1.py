import random
import os

points = 0
point_gain = 10
point_gain_add = 0
point_add_total = 0
point_gain_multiplier = 1
ppr_cost = 75
pprm_cost = 200
ppr_cost_multiplier = 1
pprm_cost_multiplier = 1

BLUE = "\033[34m"
RED = "\033[31m"
GREEN = "\033[32m"
RESET = "\033[0m"

while True:
    os.system('cls' if os.name == 'nt' else 'clear')
    version_text = "Dice Roller V1.1.1"
    print(version_text.rjust(80))
    print("-" * 80)
    dice_roll = random.randint(1, 12)
    print("You rolled a: ", dice_roll)
    dice_roll_two = random.randint(1, 12)
    print("You rolled a: ", dice_roll_two)
    total = dice_roll + dice_roll_two
    print("Total: ", total)
    print("Points Gained: ", (point_gain_multiplier) * point_gain_add + point_gain * total / 4)
    points += point_gain * total / 4
    print()
    print(GREEN + "Total Points:", points, RESET)
    print("-" * 20)
    

    reroll = input("Reroll? yes/no/shop\n")
    print()

    if reroll == "yes":
        print("Rolling Again:")
    elif reroll == "no":
        break
    elif reroll == "shop":
        print("Welcome to the Shop!, what do you want to buy?")
        print("1. +2 Points per Roll, Cost: ", ppr_cost * ppr_cost_multiplier)
        print("2. 1.25x Points per Roll Multiplier, Cost:", pprm_cost * pprm_cost_multiplier)
        shop = input("What to buy?\n")
        print("-" * 20)
        print()
        if shop == "1":
            if points >= ppr_cost * ppr_cost_multiplier:
                print(BLUE + "Receipt", RESET)
                print()
                point_gain_add += 2
                points -= ppr_cost * ppr_cost_multiplier
                print(RED + "Cost: -", ppr_cost * ppr_cost_multiplier, RESET)
                print(RED + "Bought: +2 Points per Roll", RESET)
                ppr_cost_multiplier += 0.25
                print()
                print("-" * 20)
                print()
                print("Thank's For Your Purchase!")
                print()
            elif points <= ppr_cost * ppr_cost_multiplier:
                print(RED + "Innsufficent Funds", RESET)
                print(RED + "Your Points: ", points, RESET)
                print(RED + "Required Points: ", ppr_cost * ppr_cost_multiplier, RESET)
                print()
                print("-" * 20)
        if shop == "2":
            if points >= pprm_cost * pprm_cost_multiplier:
                print(BLUE + "Receipt", RESET)
                print()
                point_gain_multiplier *= 1.25
                points -= pprm_cost * pprm_cost_multiplier
                print(RED + "Cost: -", pprm_cost * pprm_cost_multiplier, RESET)
                print(RED + "Bought: 1.25x Points Per Roll Multiplier", RESET)
                pprm_cost_multiplier += 0.5
                print()
                print("-" * 20)
                print()
                print("Thank's For Your Purchase!")
                print()
            elif points <= pprm_cost * pprm_cost_multiplier:
                print(RED + "Innsufficent Funds", RESET)
                print(RED + "Your Points: ", points, RESET)
                print(RED + "Required Points: ", pprm_cost * pprm_cost_multiplier, RESET)
                print()
                print("-" * 20)