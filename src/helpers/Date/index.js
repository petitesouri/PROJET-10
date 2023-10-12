export const MONTHS = {
  1: "janvier",
  2: "février",
  3: "mars",
  4: "avril",
  5: "mai",
  6: "juin",
  7: "juillet",
  8: "août",
  9: "septembre",
  10: "octobre",
  11: "novembre",
  12: "décembre",
};
// Ajout ici de +1 <-- la méthode getMonth Renvoie le mois (entre 0 et 11) pour la date donnée, selon le temps local.
export const getMonth = (date) => MONTHS[date.getMonth()+1];
