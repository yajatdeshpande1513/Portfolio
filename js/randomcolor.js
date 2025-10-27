function randomtheme(){
    const myrandomcolor=[   
        "#ff5733","#33ff57","#3357ff","#f333ff","#33fff5"
    ];
    let root=document.documentElement;
    root.style.setProperty("--color-1",myrandomcolor[Math.floor(Math.random()*myrandomcolor.length)]
    )
}