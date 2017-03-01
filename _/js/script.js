(function () {
    'use strict';
    /*jslint devel: true*/

    // Use these variables to set size of circle, dots, angle between dots, etc
    var initOpacity = 1; // Initial opacity of the spinner dot
    var trailOpacity = 0.3;
    var dotNum = 17; // Number of dots
    var dotHeight = 12; // sets dot height in pixels
    var dotWidth =2; // sets dot size width in pixels
    var borderRadius = 1.5; // sets border radius of dots
    var dotBGColor = "rgba(130,210,255,0.8)"; // color of dot. Can be hex, rgb or rgba
    var degrees = 20; // sets degrees arc between dots. Setting neg/pos will change direction of tracers
    var spinnerSize = 42; // sets circumference of spinner. In pixels
    var spinnerDeg = 25; // set initial rotation of spinner
    var spinnerTime = 3000; // set rotation time in milliseconds
    var spinDir = "Right"; // set direction of spin

    // Gather initial values
    var spinDot = document.querySelectorAll('.spinDot');
    var spinner = document.querySelectorAll('.spinner');
    var spinnerContainer = document.querySelectorAll('.spinnerContainer');
    var degRotate = 'rotate(' + spinnerDeg + 'deg)';
    var gradientStep = trailOpacity/(dotNum);

    // Initialize spinner on page
    //var dotx = dotSize + 'px';
    var dotWidthPx = dotWidth + 'px';
    var dotHeightPx = dotHeight + 'px';
    spinDot[0].style.width = dotWidthPx;
    spinDot[0].style.height = dotHeightPx;
    borderRadius = borderRadius + 'px';
    spinDot[0].style.borderRadius = borderRadius;
    spinDot[0].style.backgroundColor = dotBGColor;
    spinDot[0].style.opacity = initOpacity;
    dotNum = dotNum - 1;
    var spinnerContainerX = spinnerSize + 'px';
    spinner[0].style.width = spinnerContainerX;
    spinner[0].style.height = spinnerContainerX;
    spinnerContainer[0].style.width = spinnerContainerX;
    spinnerContainer[0].style.height = spinnerContainerX;
    //spinnerContainer[0].style.transform = degRotate;

    // Places Spinner in center of container
    var spinCenter = function () {

        var spinnerContainerWidth = spinnerContainer[0].parentNode.offsetWidth;
        var spinnerContainerHeight = spinnerContainer[0].parentNode.offsetHeight;
        var spinnerContPosX = (spinnerContainerWidth/2)-(spinnerSize/2);
        var spinnerContPosY = (spinnerContainerHeight/2)-(spinnerSize/2);
        var posX = spinnerContPosX + 'px';
        var posY = spinnerContPosY + 'px';
        spinnerContainer[0].style.left = posX;
        spinnerContainer[0].style.top = posY;

    }(spinCenter);

    // Centers spinDot at top of spinner container
    var dotPos = function () {
        var dotY = (spinnerSize/2)-(dotWidth/2);
        dotY = dotY + 'px';
        spinDot[0].style.left = dotY;
    }(dotPos);

    // Clone spinDot, rotates and sets opacity drop off of each clone
    for (var i = 0; i < dotNum; i++) {
        var contRotate = function () {
        //duplicate spinDot and parentNode
        var contClone = spinner[0].cloneNode(true);
        spinner[0].parentNode.appendChild(contClone);
        var deg = -(degrees + (degrees * i)) + 'deg';
        trailOpacity -= gradientStep; // steps gradient level same number of steps as there are dots

        contClone.style.transform = 'rotate(' + deg + ')';
        contClone.style.opacity = trailOpacity;
        }();

    }

    // Add css classes to spinner to rotate. User settings are applied here

//        -moz-animation:1.2s rotateRight infinite linear;
//        -webkit-animation:1.2s rotateRight infinite linear;
    var rotateSpinner = function () {
        var spinTime = spinnerTime/1000;
        console.log(spinTime);
        var rotateStyle = '"' + spinTime;
        rotateStyle += 's rotate' + spinDir + ' infinite linear"';
        //rotateStyle += '-webkit-animation:' + spinTime;
        //rotateStyle += 's rotate' + spinDir + ' infinite linear;"';
        //var tStyle = "-moz-animation:1.5s rotateRight infinite linear;";
        console.log(rotateStyle);
        // !!!!!!****** THIS IS BREAKING HERE *****!!!!!!!!
        spinnerContainer[0].style.animation = 'rotate' + spinDir;
        console.log(spinDir);
        spinnerContainer[0].style.animation += ' ' + spinTime + 's';
        console.log(spinTime);
        spinnerContainer[0].style.animation += ' linear infinite';
    }(rotateSpinner);


})();


// TO DO:
// 1. add function to reverse direction of spinner
