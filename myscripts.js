/**
 * Created by shahar on 19/05/16.
 */


if (screen.width <= 360) {
    document.getElementById("vertical").classList.remove("verticalLine") && document.getElementById("leftCullom").classList.remove("professionalExperience");
}else {
    document.getElementsByClassName("verticalLine").className = "verticalLine";
}
