/**
 * Created by shahar on 19/05/16.
 */


if (screen.width <= 375) {
    document.getElementById("vertical").classList.remove("verticalLine");
}else {
    document.getElementsByClassName("verticalLine").className = "verticalLine";
}
