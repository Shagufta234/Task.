function showContent(component) {
    var homeContent = "This is the Home page.";
    var contactContent = "This is the Contact page.";
    var informationContent = "This is the Information page.";
    var guideContent = "This is the Guide page.";
    
    var contentDiv = document.getElementById("content");
    
    switch (component) {
      case "home":
        contentDiv.innerHTML = homeContent;
        break;
      case "contact":
        contentDiv.innerHTML = contactContent;
        break;
      case "information":
        contentDiv.innerHTML = informationContent;
        break;
      case "guide":
        contentDiv.innerHTML = guideContent;
        break;
      default:
        contentDiv.innerHTML = "";
        break;
    }
}
  