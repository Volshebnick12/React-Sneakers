import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

function Header(props) {
    const { totalPrice } = useCart();

    return (
        <header className="d-flex justify-between align-center p-40">
            <Link to="/">
                <div className="d-fllex align-center">
                    <img width={40} height={40} src="/img/logo.png" alt="Логотип магазина." />
                    <div className="headerInfo">
                        <h3 className="text-uppercase">React Sneakers</h3>
                        <p className="opacity-5">Магазин лучших кросовок</p>
                    </div>
                </div>
            </Link>
            <div>
                <ul className="d-flex">
                    <li onClick={props.onClickCart} className="cart-icon mr-30 cu-p">
                        <svg className="icon mr-10" version="1.0" xmlns="http://www.w3.org/2000/svg"
                            width="20" height="20" viewBox="0 0 1280.000000 1153.000000"
                            preserveAspectRatio="xMidYMid meet">
                            <g transform="translate(0.000000,1153.000000) scale(0.100000,-0.100000)"
                                stroke="none">
                                <path d="M12140 11523 c-90 -14 -197 -39 -275 -63 -49 -15 -119 -30 -155 -34
                  -36 -4 -117 -16 -181 -26 -549 -91 -1013 -314 -1349 -650 -521 -521 -802
                  -1276 -944 -2540 -36 -316 -50 -484 -101 -1235 -60 -875 -79 -1098 -126 -1475
                  -26 -211 -81 -537 -119 -710 -28 -126 -107 -427 -115 -441 -3 -3 -46 2 -97 12
                  -843 165 -1887 181 -3018 48 -1613 -190 -3125 -664 -3568 -1120 -148 -151
                  -158 -313 -27 -427 19 -17 41 -29 47 -27 28 9 588 157 848 224 880 226 1490
                  358 2090 451 793 122 1507 151 2095 84 1185 -134 2015 -659 2504 -1584 l55
                  -105 -79 68 c-360 310 -929 548 -1662 697 -750 153 -1682 200 -2533 130 -940
                  -79 -1778 -298 -2257 -591 -37 -23 -95 -50 -128 -61 -268 -88 -447 -280 -517
                  -553 -27 -103 -29 -313 -4 -423 38 -172 104 -326 204 -477 233 -350 583 -590
                  987 -677 99 -21 344 -15 440 10 164 44 308 134 414 257 50 59 124 204 147 290
                  26 94 30 321 9 431 -72 366 -318 718 -661 945 -99 66 -109 56 96 89 1132 180
                  2486 132 3679 -129 101 -22 186 -42 188 -44 2 -2 -17 -44 -42 -93 -158 -311
                  -108 -715 133 -1079 233 -351 583 -590 987 -677 99 -21 344 -15 440 10 164 44
                  308 134 414 257 50 59 124 205 147 290 33 121 29 384 -7 502 -9 29 -5 41 47
                  129 140 238 236 553 275 904 17 146 17 532 1 675 -47 418 -158 770 -320 1020
                  -25 38 -84 109 -131 156 -70 70 -103 94 -174 129 -83 41 -88 45 -82 69 22 86
                  68 327 85 446 59 423 80 834 100 1905 13 758 27 1119 56 1485 59 761 185 1324
                  390 1740 277 565 697 867 1301 936 l113 12 67 -64 c234 -223 470 -284 673
                  -173 180 98 313 369 297 604 -18 249 -158 416 -392 465 -65 13 -205 18 -265 8z
                  m-8348 -10078 c82 -33 190 -114 251 -190 225 -280 160 -637 -121 -662 -234
                  -21 -499 195 -567 462 -50 198 34 373 198 416 55 14 171 1 239 -26z m5390 0
                  c226 -90 400 -348 386 -570 -22 -325 -380 -385 -653 -111 -120 120 -185 265
                  -185 410 0 144 86 264 213 297 55 14 171 1 239 -26z"/>
                                <path d="M2725 9683 c-140 -4 -503 -31 -654 -49 -738 -86 -1273 -261 -1616
                  -529 -451 -353 -565 -855 -343 -1520 259 -778 1029 -1791 2168 -2855 150 -140
                  532 -479 557 -494 7 -4 -46 96 -118 221 -72 125 -203 354 -292 507 -152 266
                  -159 280 -141 293 33 25 243 147 384 224 243 131 553 273 843 385 l138 53 43
                  -67 c194 -305 387 -643 760 -1332 32 -58 55 -96 52 -85 -134 515 -254 900
                  -428 1379 -44 120 -78 219 -76 221 31 28 1028 281 1042 264 2 -2 35 -84 75
                  -182 112 -277 214 -560 312 -862 l48 -150 1 102 c1 291 -71 941 -126 1134 -5
                  18 -5 18 326 63 209 28 705 76 791 76 l56 0 41 -167 c37 -156 71 -323 107
                  -533 13 -80 14 -66 9 250 -2 184 -7 362 -10 396 l-6 61 47 6 c61 9 888 7 1065
                  -2 74 -4 137 -6 139 -4 5 3 -181 89 -304 140 -252 105 -575 198 -840 243 -71
                  12 -136 25 -144 29 -9 5 -21 47 -33 117 -26 158 -85 437 -124 598 -19 76 -33
                  140 -32 141 4 3 269 22 498 37 205 13 1040 17 1305 6 l170 -6 -130 24 c-514
                  95 -1120 160 -1775 190 l-146 6 -18 67 c-48 172 -256 779 -341 993 -8 20 -74
                  21 720 -7 591 -21 1813 -78 2155 -99 106 -7 63 4 -245 63 -2582 495 -4406 697
                  -5910 654z m2678 -723 c186 -317 507 -911 507 -937 0 -6 -74 -11 -207 -12
                  -222 -2 -497 -14 -761 -32 -90 -6 -164 -10 -166 -8 -1 2 -43 76 -91 164 -160
                  287 -323 542 -532 827 -51 70 -93 130 -93 133 0 3 284 4 632 3 l632 -3 79
                  -135z m-1966 -32 c232 -281 455 -578 643 -856 76 -112 100 -156 91 -162 -7 -4
                  -43 -10 -80 -14 -164 -17 -853 -123 -912 -141 -11 -4 -38 32 -99 132 -161 266
                  -357 552 -588 861 -80 106 -143 194 -141 196 20 19 756 110 925 115 l51 1 110
                  -132z m-1721 -571 c230 -234 523 -550 656 -707 l47 -55 -176 -44 c-230 -56
                  -551 -146 -815 -227 -166 -51 -213 -63 -219 -52 -31 48 -110 345 -130 486 -14
                  104 -7 315 15 397 24 89 99 232 158 299 58 66 175 166 194 166 6 0 128 -118
                  270 -263z m4415 -792 c97 -216 249 -600 249 -628 0 -9 -22 -11 -82 -5 -233 19
                  -847 3 -1048 -27 l-35 -6 -59 173 c-32 95 -87 245 -122 332 -36 87 -63 160
                  -62 162 13 12 1031 155 1078 150 8 -1 41 -62 81 -151z m-1600 -222 c122 -218
                  262 -494 253 -502 -5 -4 -63 -18 -129 -31 -178 -34 -465 -103 -688 -166 -109
                  -31 -200 -54 -202 -52 -2 2 -27 55 -55 117 -28 63 -98 208 -156 323 -57 114
                  -104 212 -104 216 0 12 923 219 987 221 17 1 35 -23 94 -126z m-1560 -436 c75
                  -100 182 -247 238 -326 l101 -144 -182 -67 c-348 -128 -626 -242 -996 -408
                  l-222 -100 -74 131 c-154 276 -178 321 -272 502 -53 102 -94 188 -92 190 22
                  22 1290 404 1343 404 14 0 58 -51 156 -182z"/>
                            </g>
                        </svg>
                        <span>{totalPrice} руб.</span>
                    </li>
                    <li className="mr-30">
                        <Link to="/favoriteslist">
                            <svg className="icon" width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.1003 0C16.7293 0 18.0976 0.54932 19.2052 1.64796C20.3129 2.7466 20.8668 4.08759 20.8668 5.67092C20.8668 6.44643 20.7039 7.23002 20.3781 8.02169C20.0523 8.81335 19.6939 9.51616 19.303 10.1301C18.912 10.744 18.2523 11.5357 17.3238 12.5051C16.3953 13.4745 15.6134 14.2581 14.9781 14.8559C14.3428 15.4537 13.3248 16.3665 11.9239 17.5944L10.4089 18.9515L8.89403 17.6429C7.52572 16.3827 6.51577 15.4537 5.8642 14.8559C5.21262 14.2581 4.42258 13.4745 3.49408 12.5051C2.56559 11.5357 1.90586 10.744 1.51492 10.1301C1.12397 9.51616 0.773748 8.81335 0.464249 8.02169C0.15475 7.23002 0 6.44643 0 5.67092C0 4.08759 0.553841 2.7466 1.66152 1.64796C2.7692 0.54932 4.12123 0 5.71759 0C7.60717 0 9.17095 0.727041 10.4089 2.18112C11.6469 0.727041 13.2107 0 15.1003 0ZM10.5067 16.0918C12.1031 14.6701 13.2677 13.6118 14.0008 12.9171C14.7338 12.2224 15.5401 11.3903 16.4198 10.4209C17.2994 9.45153 17.9102 8.60332 18.2523 7.87628C18.5944 7.14924 18.7654 6.41412 18.7654 5.67092C18.7654 4.63691 18.4152 3.78061 17.7148 3.10204C17.0143 2.42347 16.1428 2.08418 15.1003 2.08418C14.3184 2.08418 13.5772 2.31037 12.8768 2.76276C12.1764 3.21514 11.6795 3.79677 11.3863 4.50765H9.43158C9.17095 3.79677 8.69041 3.21514 7.98997 2.76276C7.28952 2.31037 6.53206 2.08418 5.71759 2.08418C4.67507 2.08418 3.81173 2.42347 3.12757 3.10204C2.44342 3.78061 2.10134 4.63691 2.10134 5.67092C2.10134 6.41412 2.26423 7.14924 2.59002 7.87628C2.91581 8.60332 3.52666 9.45153 4.42258 10.4209C5.3185 11.3903 6.13297 12.2224 6.866 12.9171C7.59902 13.6118 8.74743 14.6701 10.3112 16.0918L10.4089 16.1888L10.5067 16.0918Z" />
                            </svg>
                        </Link>
                    </li>
                    <li>
                        <Link to="/orders">
                            <svg className="icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 4.579 4.579 0 10 0C15.421 0 20 4.579 20 10C20 13.19 18.408 16.078 16 17.924V18H15.898C14.23 19.245 12.187 20 10 20C7.813 20 5.77 19.245 4.102 18H4V17.924C1.592 16.078 0 13.189 0 10ZM7.12347 15.236C6.59154 15.6639 6.22136 16.2604 6.074 16.927C7.242 17.604 8.584 18 10 18C11.416 18 12.758 17.604 13.926 16.927C13.7785 16.2605 13.4082 15.6641 12.8764 15.2362C12.3445 14.8083 11.6827 14.5744 11 14.573H9C8.3173 14.5742 7.6554 14.808 7.12347 15.236ZM13.7677 13.4117C14.5877 13.9574 15.2286 14.7329 15.61 15.641C17.077 14.182 18 12.176 18 10C18 5.663 14.337 2 10 2C5.663 2 2 5.663 2 10C2 12.176 2.923 14.182 4.39 15.641C4.77144 14.7329 5.41227 13.9574 6.23227 13.4117C7.05227 12.866 8.01501 12.5742 9 12.573H11C11.985 12.5742 12.9477 12.866 13.7677 13.4117ZM6 8C6 5.72 7.72 4 10 4C12.28 4 14 5.72 14 8C14 10.28 12.28 12 10 12C7.72 12 6 10.28 6 8ZM8 8C8 9.178 8.822 10 10 10C11.178 10 12 9.178 12 8C12 6.822 11.178 6 10 6C8.822 6 8 6.822 8 8Z" />
                            </svg>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;