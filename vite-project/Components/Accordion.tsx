import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

export default function AccordionUsage() {
    return (
        <div>
            <Accordion>
                <AccordionSummary sx={{ maxWidth: 345 }}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    Description
                </AccordionSummary>
                <AccordionDetails sx={{ maxWidth: 345 }}>
                    Chez Focaly, vous recevez votre location chez vous 48h avant votre premier jour de location !

                    Libérez l'aventurier qui sommeille en vous avec la GoPro Hero 11, la caméra d'action ultime pour capturer des moments palpitants. Dotée d'une résolution incroyable et d'une stabilisation avancée, cette caméra vous permet de revivre vos exploits avec une qualité d'image remarquable, quel que soit l'environnement. Étanche et résistante aux chocs, la Hero 11 vous suit dans les situations les plus extrêmes, garantissant des prises de vue fluides et époustouflantes. Grâce à ses fonctionnalités conviviales et à sa connectivité sans fil, vous pouvez partager instantanément vos aventures avec le monde entier.

                    Informations complémentaires :

                    N'incluez pas les délais de livraison dans vos dates de location.
                    La livraison et le retour sont gratuits et inclus dans votre location.
                    Vous recevrez vos équipements de location 24 à 48 heures avant le début de votre période de location.

                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary sx={{ maxWidth: 345 }}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    Inclus dans la location
                </AccordionSummary>
                <AccordionDetails sx={{ maxWidth: 345 }}>
                    - GoPro Hero 11 avec son étui de transport
                    - Câble de chargement
                    - Carte SD de 64Go

                    Vous pouvez ajouter des accessoires supplémentaires (perche, caisson..) en cliquant sur "Étape Suivante".
                </AccordionDetails>
            </Accordion>

        </div>
    );
}
