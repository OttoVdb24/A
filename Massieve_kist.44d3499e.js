function SendMail(){let e=e=>{let n=document.getElementById(e);return n?"value"in n?n.value:n.textContent||"":""},n=e=>{let n=document.getElementById(e);return n&&n.checked?"Ja":"Nee"},t=e("productType"),a={productType:e("productType"),naam:e("fname"),voornaam:e("lname"),bedrijf:e("Bedrijf"),nummer:e("Nummer"),mail:e("Mail"),opmerkingen:e("opmerkingen"),levertermijn:e("levertermijn")},r=`
        -----Contactgegevens-----
        Voornaam: ${a.naam}
        Achternaam: ${a.voornaam}
        Bedrijf: ${a.bedrijf}
        Telefoonnummer: ${a.nummer}
        E-mailadres: ${a.mail}

        ----Opmerkingen----
        ${a.opmerkingen}
        ----Levertermijn----
        ${a.levertermijn}
        `;e("Oplage");let i=e("Uitvoering"),l=e("LengteInput"),p=e("BreedteInput"),o=e("HoogteInput"),k=e("DekPlankenInput"),d=e("TussenPlankenInput"),$=e("BodemPlankenInput"),c=e("ZijkantPlankenInput"),m=e("DekselPlankenInput"),s=n("VerstevigingCheck"),g=n("ISPMCheck"),u=n("ZeeWaaCheck"),P=n("DekselPlankenCheck"),I=e("KeperAantalInput"),f=e("KeperAfstandInput"),B=e("PlaatTypeSelect");var h=document.getElementById("KeperAfstandCheck"),K=document.getElementById("OptieDekPlanken"),v=document.getElementById("BodemCheck"),y=document.getElementById("OptieBodemPlanken");let b="";switch(a.productType){case"PlaatKist":b=`
Product type: ${t}
${r}
----Afmetingen----
Lengte: ${l}
Breedte: ${p}
Hoogte: ${o}
${h.checked?"----Keper opties----\nKeper aantal: "+I+"\nKeper afstand: "+f:""}
----Opties----
Verstevigd: ${s}
ISMP: ${g}
Plastic bekleding: ${u}
`;break;case"MassieveKist":b=`
Product type: ${t}

uitvoering: ${i}

----Afmetingen----
Lengte: ${l}
Breedte: ${p}
Hoogte: ${o}

${h.checked?"----Keper opties----\nKeper aantal: "+I+"\nKeper afstand: "+f:""}


----Opties----
ISMP: ${g}
Plastic bekleding: ${u}

`;break;case"Pallet-4wegs":b=`
uitvoering: ${i}

----Afmetingen----
Lengte: ${l}
Breedte: ${p}
TussenPlanken: ${d}
BodemPlanken: ${$}

----Opties----
ISMP: ${g}

----Dek optie----
${K.checked?"DekPlanken: "+k:"Dekplaat: "+B}

`;break;case"Pallet-2wegs":b=`
uitvoering: ${i}

----Afmetingen----
Lengte: ${l}
Breedte: ${p}
Kepers: ${I}

----Opties----
ISMP: ${g}

----Dek optie----
${K.checked?"DekPlanken: "+k:"Dekplaat: "+B}

${v.checked?"----Bodem optie----\n"+(y.checked?"Bodemplankne: "+$:"Bodemplaat: "+B):""}

`;break;case"ProfielMand":b=`
            Product type: ${t}

----Afmetingen----
Lengte: ${l}
Breedte: ${p}
Hoogte: ${o}

${h.checked?"----Keper opties----\nKeper aantal: "+I+"\nKeper afstand: "+f:""}

----Opties----
Dekselplanken: ${P}
ISMP: ${g}

----Dekoptie---
Dekplanken: ${k}
Zijkantplanken:
Dekselplanken:

`;break;case"Krat":b=`
Product type: ${t}

Uitvoering: ${i}

----Afmetingen----
Lengte: ${l}
Breedte: ${p}
Hoogte: ${o}

----Opties----
Plastic bekleding: ${u}
ISMP: ${g}

----Planken----
Dekplanken: ${k}
Zijkantplanken: ${c}
Dekselplanken: ${m}
  `;break;case"Krat_toe":b=`
Product type: ${t}

----Afmetingen----
Lengte: ${l}
Breedte: ${p}
Hoogte: ${o}

----Opties----
Plastic bekleding: ${u}
ISMP: ${g}

${h.checked?"----Keper opties----\nKeper aantal: "+I+"\nKeper afstand: "+f:""}

----Planken----
Dekplanken: ${k}

  `;break;default:b=`
Product type: ${a.productType||"Niet gespecificeerd"}


`}window.location.href=`mailto:Webshop.hout@Mariasteen.be?subject=${encodeURIComponent("Bestelling via de configurator")}&body=${encodeURIComponent(b)}`}
//# sourceMappingURL=Massieve_kist.44d3499e.js.map
