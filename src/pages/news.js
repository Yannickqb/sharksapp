// NewsPage.js
import React from 'react';
import NewsItem from '@/app/components/news';
import Navbar from '@/app/components/nav';

class NewsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [
        //New HC
        {
          imageUrl: '/marc.jpeg',
          title: 'Schaffhausen Sharks mit neuem Head Coach',
          summary:
            "Die Schaffhausen Sharks haben ihren Headcoach für die anstehende " +
            "Saison gefunden. Die Lücke, welche Jens Urben, der weiter im Vorstand als " +
            "Vize-Präsident für die Schaffhausen Sharks tätig ist, wird von dem bisherigen " +
            "Offense Coordinator Marc Herrmann gefüllt. Nach einer schwierigen Saison stecken " +
            "die Sharks bereits tief in der Vorbereitung, um es im Jahr 2024 besser zu machen. " +
            "«Wir haben letztes Jahr viel Lehrgeld zahlen müssen, nun geht es darum, aus den " +
            "Fehler zu lernen. Ziel muss es sein, im Spiel, um die Playoffs ein Wort mitreden zu " +
            "können», so der neue Headcoach. Marc Herrmann erhält weitere Unterstützung im Coaching " +
            "Staff der Sharks. So übernimmt neu Patrick Neumeister die Rolle des Special Team " +
            "Coordinator und Angelo Lachnit wird zum Spieler-Coach für die Offense Line. " +
            "«Ich denke unser Coaching Staff hat sich über die Jahre gut entwickelt. Wir sind " +
            "unterdessen eine schlagkräftige Truppe, wobei wir noch die eine oder andere Idee für " +
            "eine Verstärkung haben», lässt der Headcoach verlauten. Die Sharks sind auch noch auf " +
            "der Suche nach neuen Mitgliedern. Weitere Infos findet man auf der Website oder auf " +
            "Social Media.",
          date: "16.10.2023"
        },
        //Luzern game 2
        {
          imageUrl: '/luzern.jpeg',
          title: 'Spielbericht Schaffhausen Sharks vs Luzern Lions',
          summary:
            "Die Intention der Sharks in diesem Spiel war klar. Mit den Playoffs hat man " +
            "das erste Mal seit Jahren nichts zu tun (was auch nicht als Ziel ausgegeben war). " +
            "Jedoch wollte man nach wie vor den ersten Sieg einfahren und unter Umständen für " +
            "ein bisschen Wirbel für die Mannschaften an der Tabellenspitze sorgen.\n\n" +
            "Die Sharks erhielten das Ballrecht zuerst und bewegten das Ei direkt sehr gut über " +
            "das Feld. Kurz vor der Endzone konnte Luzern einen Pass jedoch abfangen und zum Pick " +
            "Six zurücktragen. Der nächste Drive des Heimteams brachte nichts ein und Luzern " +
            "wiederum konnte mit ihrer Offense nach einem schönen Lauf auf 14:0 erhöhen.\n\n" +
            "Die Defense der Sharks wiederum konnte bei einem Spielzug ein Big Play generieren. " +
            "LB Ursin Käppeli konnte den versuchten Pass ablenken, DE Patrick Burgunder diesen " +
            "wiederum abfangen und zum Pick Six zurücktragen. 14:07. Ein Field Goal der Gäste " +
            "sorgte für den 17:07 Pausenstand.\n\n" +
            "Halbzeit zwei ging so spannend weiter, wie die erste geendet hatte. beide Teams " +
            "bewegten den Ball gut, die jeweiligen Defense-Einheiten konnten, ganz nach dem Motto " +
            "\"bend but don't break\", jedoch ebenfalls immer wieder die Spielzüge der Offense " +
            "beenden.\n\n" +
            "Die Sharks konnten Mitte drittes Quarter auf 17:14 verkürzen. RB Giuliano Bianchi " +
            "konnte einen 25-Yard Lauf vollenden.\n\n" +
            "Die Lions jedoch konnten wiederum auch nochmal nachlegen und den alten Abstand " +
            "wiederherstellen. Somit führten sie 24:14.\n\n" +
            "Die Sharks gaben jedoch nicht auf und QB Yannick Ledermann führte seine Offense " +
            "einmal mehr das Feld hinunter, um vor der Endzone mittels \"Quarterback-Sneak\" zu " +
            "punkten. 24:21.\n\n" +
            "Bei diesem Stand blieb es dann auch. Die Sharks können jedoch mächtig stolz auf sich " +
            "sein. Entgegen aller Erwartungen der Football-Szene hielten die Sharks gegen den " +
            "klaren Favoriten gut mit und hätten, ohne ein-zwei eigene, entscheidende Fehler, " +
            "hier auch gerne gewinnen können. Die Offense läuft mit jedem Spiel besser und das " +
            "Laufspiel, bisher ein kleines Sorgenkind, lief in diesem Spiel mächtig heiss.\n\n" +
            "Diesen Sonntag, 25.06.2023, 14:00 Uhr, treten die Sharks ihr letztes Spiel in dieser " +
            "Saison an. Zu Gast im Shark-Tank sind die St. Gallen Bears. (Nachholspiel vom April).",
          date: "20.06.2023",
          subtitle: "Schaffhausen Sharks 21:24 Luzern Lions"
        },
        //Langental game 2
        {
          imageUrl: '/invaders.jpeg',
          title: 'Spielbericht Schaffhausen Sharks @ Langenthal Invaders',
          summary:
            "Woran erkennt man, dass man im Amateursport unterwegs ist? Wenn man bei 28 Grad Celsius " +
            "mit 20 Mann ein Auswärtsspiel bestreiten muss. (Soll keine Ausrede für die Niederlage sein, " +
            "jedes Team hat Hürden zu bewältigen). Dies jedoch waren die Probleme der Sharks vergangenes Wochenende.\n\n" +
            "Die Invaders gewannen den Coin-Toss und gaben das Ballrecht in Halbzeit 1 an die Sharks ab. " +
            "Diese mussten das Feld jedoch bald wieder verlassen. Die Invaders wiederum konnten ihren " +
            "ersten Drive direkt nutzen und 07:00 in Führung gehen. Eine 15:00 Führung der Invaders " +
            "konnten die Sharks durch einen Pass von QB Yannick Ledermann auf WR Patrick Burgunder zum " +
            "zwischenzeitlichen 15:06 verkürzen, nur um im anschliessenden Drive des Heimteams nach einem " +
            "langen Pass gleich wieder mit 21:06 in Rückstand zu geraten. Die Sharks konnten zwar mehrfach " +
            "das Feld gut überbrücken, wurden jedoch durch die starke Invaders-Defense vor der Endzone " +
            "gestoppt. (4-out / Turnover).\n\n" +
            "Die zweite Halbzeit war ein Spiegelbild der ersten. Die Invaders schafften zwei weitere TD " +
            "während die Sharks zwar den Ball bewegen, dies jedoch nicht in Punkte ummünzen konnten. Die " +
            "Defense der Sharks spielte ebenfalls stark auf und konnte das Heimteam immer wieder vom Feld " +
            "schicken. Leider reichte dies trotzdem nicht, um die Niederlage abwenden zu können.\n\n" +
            "Für die Sharks stehen nun noch zwei Heimspiele gegen die Luzern Lions (18.06) und St. Gallen " +
            "Bears (25.06) an.",
          date: "12.06.2023",
          subtitle: "Willkommen im Amateursport Langenthal Invaders – Schaffhausen Sharks 39:06"
        },
        //Langental game 2
        {
          imageUrl: '/jets.jpeg',
          title: 'Spielbericht Schaffhausen Sharks @ Bienna Jets',
          summary:
            "Die Sharks reisten vergangenes Wochenende nach Biel zu den dort beheimateten Jets. " +
            "Nachdem das Hinspiel in Woche 2 mit 0:23 verloren ging, wollte man sich dieses Mal " +
            "nicht diese Blösse geben. Das Team war hochmotiviert, endlich den ersten Sieg der Saison " +
            "einfahren zu können.\n\n" +
            "Die Sharks starteten mit ihrer Offense ins Spiel, musste das Spielfeld jedoch schnell " +
            "wieder verlassen. Die Jets wiederum punkteten direkt und gingen mit 7:0 in Führung. Die " +
            "Gäste konnten im nächsten Drive durch einen Pass von Yannick Ledermann auf Patrick Burgunder " +
            "zum 7:7 ausgleichen und mittels der gleichen Kombination im zweiten Viertel sogar in Führung " +
            "gehen. Bei nur noch 21 Sekunden auf der Uhr erhielten die Sharks das Spielgerät erneut zurück. " +
            "Ein unterworfener, tiefer Pass, welcher bei seiner Vollendung zum TD geführt hätte, wurde durch " +
            "die Jets abgefangen und zum Pick Six zurückgetragen. So ging es mit 14:14 in die Halbzeit.\n\n" +
            "Die Ansprache in der Halbzeit war klar. Nachdem man bereits gegen die Lions, die Invaders " +
            "sowie die Pirates bis zur Halbzeit gut mithalten konnte, sollte dieses Mal die Konzentration " +
            "endlich mal hochgehalten und dort angeknüpft werden, wo man aufgehört hat.\n\n" +
            "Das richtige gesagt, das falsche getan. Der Kickoff wurde durch die Jets umgehend in die Endzone " +
            "der Sharks retourniert. Auch schlossen die Jets ihren nächsten Drive wiederum mit einem Touchdown " +
            "ab und so stand es direkt 28:14.\n\n" +
            "Wäre so ein Spiel vor ein paar Wochen gleich gegessen gewesen, merkt man auch bei den Sharks, dass " +
            "sie sich den Begebenheiten in dieser Liga langsam anpassen können. Die Offense steckte nicht auf und " +
            "konnte durch ein ausgewogenes Lauf- und Passspiel, mit mächtiger Unterstützung ihrer starken " +
            "Offensive-Line, gut den Ball bewegen. Mehrmals fand Yannick Ledermann dabei auch Nik Frischknecht, " +
            "welcher zweimal zum Touchdown \"verwandeln\" konnte. Da ein Extrapunkt vergeben wurde, wurde beim " +
            "zweiten TD die Two-Point-Conversion versucht und durch RB Mariano Pavlic auch in die Endzone " +
            "getragen. 28:28.\n\n" +
            "Aber auch die Jets bewegten weiterhin den Ball und fanden plötzlich auch die läuferischen " +
            "Fähigkeiten ihres Quarterbacks, welcher zwei-dreimal gut Yards selber erlaufen und das Heimteam " +
            "so das Feld runterführen konnte. Auch diesen Drive münzten die Jets in Punkte um und gingen " +
            "35:28 in Führung. Die Sharks konnten wiederum einen TD (mal wieder Nik Frischknecht) erzielen. " +
            "Die Coaches gingen hier wiederum aufs Ganze und gaben, aufgrund bereits zwei geblockter Fieldgoal-Versuche, " +
            "den Versuch für zwei Punkte rein. Dies scheiterte jedoch und so blieb es beim 35:34.\n\n" +
            "Das Spiel neigte sich langsam dem Ende zu. Die Jets konnten noch zweimal schnell gestoppt werden. " +
            "Bei knapp 1:30 min auf der Uhr, musste das Heimteam punten. Dabei machte der Punter einen super " +
            "Job und legte das Ei den Sharks auf die 1 Yard Linie. Da man 89 Yards (kurzes Feld) zu überbrücken " +
            "hatte, musste man auf Seiten Sharks Risiko gehen. Dies wussten natürlich auch die Jets und stellten " +
            "sich dementsprechend ein. Einer dieser Pässe konnte abgefangen und zum Pick Six zurückgetragen werden, " +
            "was zum Endstand von 41:34 führte.\n\n" +
            "Die Sharks gingen mit gemischten Gefühlen aus diesem Spiel. Auf der einen Seite war es sehr bitter, " +
            "dieses Spiel so knapp zu verlieren. Auf der anderen Seite war es mit Abstand das stärkste Spiel der " +
            "Sharks in dieser Saison und zeigte klar auf, dass die Sharks von Woche zu Woche stärker werden."
        },
        // More articles can be added in the same format
      ],
    };
  }

  render() {
    return (
      <div>
        <div className="fixed top-0 left-0 w-full z-50">
          <Navbar />
        </div>
        <div className="pt-20 flex justify-center">
          <div className="w-3/4">
            <div className="pt-8">
              {this.state.articles.map((article, index) => (
                <NewsItem
                  key={index}
                  imageUrl={article.imageUrl}
                  title={article.title}
                  subtitle={article.subtitle}
                  summary={article.summary}
                  date={article.date}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );

  }
}

export default NewsPage;
