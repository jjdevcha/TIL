guess = ""
secret_word = "hehehe"
count = 0
guess_limit = 3
out_of_guesses = False

while guess != secret_word and not(out_of_guesses):
    if count < guess_limit:
        guess = input("What is our secret word? ")
        count += 1
    else:
        out_of_guesses = True

if out_of_guesses:
    print("YOU LOSE")
else:
    print("YOU WIN")
