"use strict";console.log(">> Ready :)");const input=document.querySelector(".input"),result=document.querySelector(".result"),addText=function(){""===input.value?result.innerHTML="No me borres 🐲":result.innerHTML=input.value};input.addEventListener("keyup",addText);const input1=document.querySelector(".input1"),result1=document.querySelector(".result1"),addText1=function(){""===input1.value?result1.innerHTML="No me borres 🌋":result1.innerHTML=input1.value};input1.addEventListener("keyup",addText1);let email=document.querySelector("#email"),phone=document.querySelector("#phone"),linkedin=document.querySelector("#linkedin"),github=document.querySelector("#github"),emailIcon=document.querySelector(".email__icon"),phoneIcon=document.querySelector(".phone__icon"),linkedinIcon=document.querySelector(".linkedin__icon"),githubIcon=document.querySelector(".github__icon");function convertToIcon(e,n){n.href=e,console.log(n.href)}function invisibleIcon(e,n){""===e.value?n.classList.add("hide__card__list--link"):n.classList.remove("hide__card__list--link")}function printEmail(){convertToIcon(`mailto:${email.value}`,emailIcon)}function printPhone(){convertToIcon(`tel:${phone.value}`,phoneIcon)}function printLinkedin(){convertToIcon(`https://www.${linkedin.value}`,linkedinIcon)}function printGithub(){convertToIcon(`https://github.com/${github.value}`,githubIcon)}function invisibleEmail(){invisibleIcon(email,emailIcon)}function invisiblePhone(){invisibleIcon(phone,phoneIcon)}function invisibleLinkedin(){invisibleIcon(linkedin,linkedinIcon)}function invisibleGithub(){invisibleIcon(github,githubIcon)}email.addEventListener("keyup",printEmail),phone.addEventListener("keyup",printPhone),linkedin.addEventListener("keyup",printLinkedin),github.addEventListener("keyup",printGithub),email.addEventListener("keyup",invisibleEmail),phone.addEventListener("keyup",invisiblePhone),linkedin.addEventListener("keyup",invisibleLinkedin),github.addEventListener("keyup",invisibleGithub);const preview=document.querySelector(".section__card"),radio1=document.getElementById("settings__palette1"),radio2=document.getElementById("settings__palette2"),radio3=document.getElementById("settings__palette3");function changeColor(e){preview.classList.remove("option1","option2","option3"),preview.classList.add(e)}radio1.addEventListener("click",function(){changeColor("option1")}),radio2.addEventListener("click",function(){changeColor("option2")}),radio3.addEventListener("click",function(){changeColor("option3")});