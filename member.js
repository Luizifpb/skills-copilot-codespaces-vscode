function skillsMember() {
    var member = document.getElementById("member");
    var memberSkills = document.getElementById("memberSkills");
    var memberSkillsButton = document.getElementById("memberSkillsButton");
    var memberSkillsClose = document.getElementById("memberSkillsClose");
    memberSkillsButton.onclick = function() {
        memberSkills.style.display = "block";
        member.style.display = "none";
    }
    memberSkillsClose.onclick = function() {
        memberSkills.style.display = "none";
        member.style.display = "block";
    }
}
