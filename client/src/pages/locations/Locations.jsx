import React from "react";

import styles from "./locations.module.scss";

const locations = [
  {
    imgUrl:
      "https://scontent.fvno2-1.fna.fbcdn.net/v/t1.0-9/18699803_443800995966386_9006623890055966232_n.png?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=C9zuUTMPT7gAX9Sx5ag&_nc_ht=scontent.fvno2-1.fna&oh=3426c08fdb73f87b4ffacc995100c54a&oe=5FA9FE41",
    url:
      "https://www.facebook.com/razepalanga/?eid=ARClLmwrkq7nlMxEgViQFVq2BCRd3bKbcNhHbNIBSpoMkIKOYoAOuSGESC1LGcsSt27PVHwgjLoAdIHz",
  },
  {
    imgUrl:
      "https://scontent.fvno2-1.fna.fbcdn.net/v/t1.0-9/35924305_322630591606242_6627974564611620864_n.png?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=3j5f2xb4vj8AX9A9csv&_nc_ht=scontent.fvno2-1.fna&oh=f4eebbf93c67754a76d5060c55428e6b&oe=5FAA9E07",
    url:
      "https://www.facebook.com/313cablepark/?eid=ARAIJO_b_O-3SF2cYyMw8chLBjoN6-5w20T8f5boe8feXjoOmghD_9_5z1xjGXILEqpSiiAj-oAxeW1i",
  },
  {
    imgUrl:
      "https://scontent.fvno2-1.fna.fbcdn.net/v/t1.0-9/37332290_2004958039537866_3974009780153876480_o.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=KxtuGv6D7gsAX86br9-&_nc_ht=scontent.fvno2-1.fna&oh=776984d5a14d89071d66943533294353&oe=5FABE1C1",
    url:
      "https://www.facebook.com/hollandpancakes/?eid=ARB10KF2ctQxcdQZ_2s7h9QEeqZVYXit13CXCErV7EV0wMvKrROObgVQ2Gzgg45gZcc9S8Egg8Tvimdg",
  },
  {
    imgUrl:
      "https://scontent.fvno2-1.fna.fbcdn.net/v/t1.0-9/82400868_1482624888593921_2663273821129146368_n.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_ohc=ZFbO4GKw8ZMAX_SJ7Wo&_nc_ht=scontent.fvno2-1.fna&oh=3646e7fd543292b705e1b838462db4e7&oe=5FA84036",
    url:
      "https://www.facebook.com/kablysjura/?eid=ARDJQavzJMjIE-0BvES5LTqElt7qIIQ-4kv880KRS_ZTJo4V1tFdlJ-8-qBCiSapSJJzfop80JKscBDN",
  },
  {
    imgUrl:
      "https://scontent.fvno2-1.fna.fbcdn.net/v/t1.0-9/118815226_2688996054707332_800264481790931429_n.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_ohc=wmt0S_If0ikAX8asPVQ&_nc_ht=scontent.fvno2-1.fna&oh=55220c913a44b452ffe67ef15a1f4731&oe=5FA867C4",
    url:
      "https://www.facebook.com/vilakomoda/?eid=ARA5OIPpe9eaxiyDxuAjxOzg4Cgq8D7Fyd4FjEzU75jj2q6g0d0juIckeJsqS1fb8FVMiiwkL-aHgZSs",
  },
  {
    imgUrl:
      "https://scontent.fvno2-1.fna.fbcdn.net/v/t31.0-8/15025609_635486053278058_8833294509879112393_o.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=sr26rRyTSQYAX_g2sL7&_nc_ht=scontent.fvno2-1.fna&oh=7a596064d39f547c71acf10c3c98285f&oe=5FA91014",
    url:
      "https://www.facebook.com/%C5%A0ilelis-GastroPub-634396466720350/?eid=ARAwjjsQYwWDBbfP8Qh2KirKZ1w0Jbi2MB_epol3LBO28me6BiXdMGTH0jjx087ah0EfZJ1N6fnEyE2p",
  },
];

const Locations = () => (
  <div className={styles.wrapper}>
    <div className={styles.locations}>
      {locations.map(({ imgUrl, url }) => (
        <a href={url} target="_blank" rel="noopener noreferrer">
          <div
            className={styles.locationImage}
            style={{ backgroundImage: `url(${imgUrl})` }}
          >
            <span>check more</span>
          </div>
        </a>
      ))}
    </div>
  </div>
);
export default Locations;
