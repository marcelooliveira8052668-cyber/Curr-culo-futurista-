/* ==========================
   EFEITO DIGITAÇÃO
========================== */

const textos = [

"Professor de História",

"Profissional Administrativo",

"Desenvolvedor Front-End",

"Education • Administration • Technology",

"Aprendizado Contínuo"

];

let textoAtual = 0;
let letraAtual = 0;
let apagando = false;

const typing = document.getElementById("typing");

function maquinaDeEscrever(){

    const texto = textos[textoAtual];

    if(!apagando){

        typing.textContent =
        texto.substring(0, letraAtual + 1);

        letraAtual++;

        if(letraAtual === texto.length){

            apagando = true;

            setTimeout(maquinaDeEscrever,2000);

            return;
        }

    }else{

        typing.textContent =
        texto.substring(0, letraAtual - 1);

        letraAtual--;

        if(letraAtual === 0){

            apagando = false;

            textoAtual++;

            if(textoAtual >= textos.length){

                textoAtual = 0;

            }

        }

    }

    setTimeout(
        maquinaDeEscrever,
        apagando ? 40 : 80
    );

}

maquinaDeEscrever();


/* ==========================
   ANIMAÇÃO AO ROLAR
========================== */

const elementos =
document.querySelectorAll(
'.card, .item, .skill, .contact-card'
);

const observer =
new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add('show');

        }

    });

},{
    threshold:0.15
});

elementos.forEach((elemento)=>{

    observer.observe(elemento);

});


/* ==========================
   ANIMAR SKILLS
========================== */

const barras =
document.querySelectorAll(".progress");

const observerSkills =
new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";

        }

    });

},{
    threshold:0.5
});

barras.forEach((barra)=>{

    observerSkills.observe(barra);

});


/* ==========================
   EFEITO HOVER 3D
========================== */

const cards =
document.querySelectorAll(".item");

cards.forEach((card)=>{

    card.addEventListener("mousemove",(e)=>{

        const rect =
        card.getBoundingClientRect();

        const x =
        e.clientX - rect.left;

        const y =
        e.clientY - rect.top;

        const rotateY =
        ((x / rect.width)-0.5) * 12;

        const rotateX =
        ((y / rect.height)-0.5) * -12;

        card.style.transform =
        `perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-8px)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0)";

    });

});


/* ==========================
   ANO AUTOMÁTICO FOOTER
========================== */

const footer =
document.querySelector("footer p");

if(footer){

    footer.innerHTML =
    `© ${new Date().getFullYear()}
    Marcelo Oliveira • Professional Experience Hub`;

}