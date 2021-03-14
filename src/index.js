module.exports = function toReadable(number) {
    let units = "";
    let dozens = "";
    let hundreds = "";
    if (number < 10) {
        switch (number) {
            case 0:
                return 'zero';
            case 1:
                return "one";
            
            case 2:
                return "two";
            
            case 3:
                return "three";
            
            case 4:
                return "four";
            
            case 5:
                return "five";
            
            case 6:
                return "six";
            
            case 7:
                return "seven";
            
            case 8:
                return "eight";
            
            case 9:
                return "nine";
            
        }
    } 
        const numberUnits = number % 10;
        const numberDozens = number % 100;
        const dozCount = ((number - number % 10) / 10) % 10;

        if(dozCount !== 1) {
            switch (numberUnits) {
                case 0:
                    units = "";
                    break;
    
                case 1:
                    units = "one";
                    break;
    
                case 2:
                    units = "two";
                    break;
    
                case 3:
                    units = "three";
                    break;
    
                case 4:
                    units = "four";
                    break;
    
                case 5:
                    units = "five";
                    break;
    
                case 6:
                    units = "six";
                    break;
    
                case 7:
                    units = "seven";
                    break;
    
                case 8:
                    units = "eight";
                    break;
    
                case 9:
                    units = "nine";
                    break;
            }
        }

        switch (dozCount) {
            case 1:
                switch (numberDozens) {
                    case 10:
                        dozens = "ten";
                        break;
        
                    case 11:
                        dozens = "eleven";
                        break;
        
                    case 12:
                        dozens = "twelve";
                        break;
                        
                    case 13:
                        dozens = "thirteen";
                        break;
        
                    case 14:
                        dozens = "fourteen";
                        break;
        
                    case 15:
                        dozens = "fifteen";
                        break;
        
                    case 16:
                        dozens = "sixteen";
                        break;
        
                    case 17:
                        dozens = "seventeen";
                        break;
        
                    case 18:
                        dozens = "eighteen";
                        break;
        
                    case 19:
                        dozens = "nineteen";
                        break;
                };
                break;
            case 2:
                dozens = "twenty";
                break;

            case 3:
                dozens = "thirty";
                break;

            case 4:
                dozens = "forty";
                break;

            case 5:
                dozens = "fifty";
                break;

            case 6:
                dozens = "sixty";
                break;

            case 7:
                dozens = "seventy";
                break;

            case 8:
                dozens = "eighty";
                break;

            case 9:
                dozens = "ninety";
                break;
        }

            switch ((number - number % 100) / 100) {
                case 1:
                    hundreds = "one hundred";
                    break;
    
                case 2:
                    hundreds = "two hundred";
                    break;
    
                case 3:
                    hundreds = "three hundred";
                    break;
    
                case 4:
                    hundreds = "four hundred";
                    break;
    
                case 5:
                    hundreds = "five hundred";
                    break;
    
                case 6:
                    hundreds = "six hundred";
                    break;
    
                case 7:
                    hundreds = "seven hundred";
                    break;
    
                case 8:
                    hundreds = "eight hundred";
                    break;
    
                case 9:
                    hundreds = "nine hundred";
                    break;
            }
        if (dozens !== '' && hundreds !== '') {
            hundreds = hundreds + ' ';
        }
        if (units !== '') {
            dozens = dozens + ' ';
        }
        let result = hundreds + dozens + units;

        return result;

    };
