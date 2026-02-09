import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
  <div>
    <Typewriter
      options={{
        strings: [
          "AEM Full Stack Developer",
          "Expertise in AEM 6.4 | 6.5 | AEMaaCS",
          "AEM Sites | AEM Assets | AEM EDS Franklin",
          "AEM Add-On's: Dynamic Media | Firefly Assets",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 100,
      }}
    />
    <Typewriter
      options={{
        strings: [
          "Sling Models, OSGi Configs & Services",
          "JSP → HTL (Sightly) Migration",
          "Dialogs, Templates, Touch UI",
          "Java, HTML, CSS + (Logical CSS), JavaScript, jQuery, Groovy Expert",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 90,
      }}
    />
    <Typewriter
      options={{
        strings: [
          "Npm, webpack, sass",
          "Schedulers, Servlets, REST APIs, Jobs, Event Listners",
          "Git, Maven, Eclipse / IntelliJ, Felix",
          "Basic Python for offline utils",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 70,
      }}
    />
    </div>
  );
}

export default Type;
