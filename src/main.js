(() => {  

    //----- Lists -----//

    const carouselPictures = [
        '/pictures/step-0.png',
        '/pictures/step-1.png',
        '/pictures/step-2.png',
        '/pictures/step-3.png',
        '/pictures/step-4.png',
        '/pictures/step-5.png',
        '/pictures/step-6.png',
        '/pictures/step-7.png',
        '/pictures/step-8.png',
        '/pictures/step-9.png',
        '/pictures/step-10.png',
        '/pictures/step-11.png'
    ]

    const listWordsDutch = [
        'diepzeeduiker',
        'ijs',
        'beverrat',
        'quiz',
        'tipi',
        'schaakspel',
        'kwaliteiten',
        'handdoek',
        'boerekool',
        'bokaal',
        'microscoop',
        'stethoscoop',
        'liquidatie',
        'acryl',
        'quinoa',
        'oase',
        'sopraan',
        'hyacint',
        'winnaar',
        'botox',
        'computer',
        'boer',
        'tijd',
        'picknick',
        'dyslexie',
        'groepssfeer',
        'fysiek',
        'psychologie',
        'cafeine',
        'gordijn',
        'raam',
        'nachtkastje',
        'broer',
        'zus'
    ]

    const lettersToDisableButtons = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z'
    ]

    //----- Variables ----//

    var word = []
    var carouselIndex = 0
    var countCorrectLetters = 0
    var controleLetters = []
    const linePath = '/pictures/line.png'
    var temp = 0

    //----- Functions -----//

    function showText (youWon) {
        document.getElementById('start').innerHTML = 'Restart the game'
        document.getElementById('start').style.visibility = 'visible'
        const textWon = `The word that you needed to guess is indeed <strong id="correctWord">${word.join('')}</strong>.<br>You have done wonderfull!<br>If you want to restart the game, please click the button that says: Restart the game.`
        const textLost = `The word that you needed to guess is <strong id="wrongWord">${word.join('')}</strong>.<br>You have done not so well, you died!<br>If you want to restart the game, please click the button that says: Restart the game.`
        document.getElementById('carousel').style.visibility = 'hidden'
        document.getElementById('explanation').style.visibility = 'visible'

        lettersToDisableButtons.forEach(element => document.getElementById(element).disabled = true)

        youWon ? document.getElementById('explanation').innerHTML = textWon : document.getElementById('explanation').innerHTML = textLost
    }

    /*function youAreDead () {
        
        showText(false)
    }

    function youWon () {
        showText(true)
    }*/

    function start () {
        word = listWordsDutch[Math.floor((Math.random() * listWordsDutch.length))].split('')
        console.log(word)
        carouselIndex = 0
        countCorrectLetters = 0
        document.getElementById('carouselPictures').setAttribute('src', carouselPictures[carouselIndex])
        document.getElementById('carousel').style.visibility = 'visible'
        document.getElementById('explanation').style.visibility = 'hidden'
        document.getElementById('start').style.visibility = 'hidden'

        var childLetters = document.getElementById('tableRowWordShowCaseLetters').lastElementChild
        var childLines = document.getElementById('tableRowWordShowCaseLines').lastElementChild

        while (childLetters) {
            document.getElementById('tableRowWordShowCaseLetters').removeChild(childLetters)
            childLetters = document.getElementById('tableRowWordShowCaseLetters').lastChild
        }
        while (childLines) {
            document.getElementById('tableRowWordShowCaseLines').removeChild(childLines)
            childLines = document.getElementById('tableRowWordShowCaseLines').lastChild
        }

        controleLetters.forEach(element => document.getElementById(element).style.background = 'none')
        lettersToDisableButtons.forEach(element => document.getElementById(element).disabled = false)

        controleLetters = []

        for (var i = 0; i < word.length; i++) {
            const elementRow = document.createElement('td')
            elementRow.setAttribute('id', 'lineElement'.concat(i.toString()))
            elementRow.setAttribute('class', 'lineElement')
            document.getElementById('tableRowWordShowCaseLines').appendChild(elementRow)
            const elementPicture = document.createElement('img')
            elementPicture.setAttribute('src', linePath)
            elementPicture.setAttribute('width', '50px')
            document.getElementById('lineElement'.concat(i.toString())).appendChild(elementPicture)

            const elementRowLetters = document.createElement('td')
            elementRowLetters.setAttribute('id', 'lineElementLetters'.concat(i.toString()))
            elementRowLetters.setAttribute('class', 'lineElementLetters')
            document.getElementById('tableRowWordShowCaseLetters').appendChild(elementRowLetters)
        }
    }

    function carousel() {
        carouselIndex++
        document.getElementById('carouselPictures').setAttribute('src', carouselPictures[carouselIndex])
        if (carouselIndex == 11)
            setTimeout(showText, 1000, false)
    }

    function checkForLetterInWord (letter) {
        if (!controleLetters.includes(letter)) {
            controleLetters.push(letter)
            
            temp++
            if (word.includes(letter)) {
                document.getElementById(letter).style.background = '#00ff0055'
                word.forEach((element, index) => {
                    if (letter == element) {
                        document.getElementById('lineElementLetters'.concat(index.toString())).innerHTML = element
                        countCorrectLetters++
                    }
                })
                console.log(`length: ${word.length} and countCorrectLetters: ${countCorrectLetters}`)
                if (countCorrectLetters == word.length)
                    showText(true)
            }
            else {
                document.getElementById(letter).style.background = '#ff000055'
                carousel()
            }     
        }

        console.log(temp)
        
    }

    //----- Buttons -----//
    
    document.getElementById("start").addEventListener("click", () => {
        start() 
    });

    document.getElementById("a").addEventListener("click", () => {
        checkForLetterInWord('a')
    });
    document.getElementById("b").addEventListener("click", () => {
        checkForLetterInWord('b')
    });
    document.getElementById("c").addEventListener("click", () => {
        checkForLetterInWord('c')
    });
    document.getElementById("d").addEventListener("click", () => {
        checkForLetterInWord('d')
    });
    document.getElementById("e").addEventListener("click", () => {
        checkForLetterInWord('e')
    });
    document.getElementById("f").addEventListener("click", () => {
        checkForLetterInWord('f')
    });
    document.getElementById("g").addEventListener("click", () => {
        checkForLetterInWord('g')
    });
    document.getElementById("h").addEventListener("click", () => {
        checkForLetterInWord('h')
    });
    document.getElementById("i").addEventListener("click", () => {
        checkForLetterInWord('i')
    });
    document.getElementById("j").addEventListener("click", () => {
        checkForLetterInWord('j')
    });
    document.getElementById("k").addEventListener("click", () => {
        checkForLetterInWord('k')
    });
    document.getElementById("l").addEventListener("click", () => {
        checkForLetterInWord('l')
    });
    document.getElementById("m").addEventListener("click", () => {
        checkForLetterInWord('m')
    });
    document.getElementById("n").addEventListener("click", () => {
        checkForLetterInWord('n')
    });
    document.getElementById("o").addEventListener("click", () => {
        checkForLetterInWord('o')
    });
    document.getElementById("p").addEventListener("click", () => {
        checkForLetterInWord('p')
    });
    document.getElementById("q").addEventListener("click", () => {
        checkForLetterInWord('q')
    });
    document.getElementById("r").addEventListener("click", () => {
        checkForLetterInWord('r')
    });
    document.getElementById("s").addEventListener("click", () => {
        checkForLetterInWord('s')
    });
    document.getElementById("t").addEventListener("click", () => {
        checkForLetterInWord('t')
    });
    document.getElementById("u").addEventListener("click", () => {
        checkForLetterInWord('u')
    });
    document.getElementById("v").addEventListener("click", () => {
        checkForLetterInWord('v')
    });
    document.getElementById("w").addEventListener("click", () => {
        checkForLetterInWord('w')
    });
    document.getElementById("x").addEventListener("click", () => {
        checkForLetterInWord('x')
    });
    document.getElementById("y").addEventListener("click", () => {
        checkForLetterInWord('y')
    });
    document.getElementById("z").addEventListener("click", () => {
        checkForLetterInWord('z')
    });
    
})();