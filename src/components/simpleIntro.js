import React, { useState } from "react"

import Layout from "./layout"
import Slide from "./slide"
import IllustrationOne from "./IllustrationOne"
import AnimatedIntro from "./animatedIntro"

const SimpleIntroPage = (props) => {

  const illustrations = [
    <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="m205.104 772.625 23.626 20.516 63.001-80.561 28.35 23.727 149.628-196.746 132.302 233.064 36.226-40.03 66.151 108.615h-554.41z" fill="#f4f4f4"/><path d="m724.25796 841.21043h-594.1495" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1.5"/><path d="m650.68871 433.57605s-151.19885 280.67935 172.78495 299.87839l15.59922 13.19934v-92.39538l-108.84711-33.59832-3.2-223.18884" fill="#e2e2e2"/><path d="m729.56216 574.37585c-25.91079 10.751-45.419 57.74594-45.419 114.09516q0 4.24541.14868 8.41514c26.3876 16.13994 61.98179 28.2062 109.41821 33.92222a227.47183 227.47183 0 0 0 3.87-42.33736 223.57081 223.57081 0 0 0 -5.172-48.61684l-62.18227-19.1941z"/><path d="m711.776 824.725-40.904-393.113 93.671-6.417 17.032 6.937 8.005 409.078" fill="#edeeef"/><path d="m704.326 216.94971a18.465 18.465 0 0 0 -22.8722 17.93132v14.78561a24.835 24.835 0 0 0 18.9074 24.11724l23.52877 5.783v-57.80867l-19.564-4.8085" fill="#edeeef"/><path d="m681.45377 249.66664a24.835 24.835 0 0 0 18.9074 24.11724l23.52877 5.783" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1.5"/><circle cx="705.42556" cy="245.59824" r="1.13465"/><circle cx="687.99815" cy="245.59824" r="1.13465"/><g fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1.5"><path d="m693.111 252.367v-17.486h-8.76"/><path d="m707.5631 234.88106h-8.75992"/><path d="m682.98761 232.01789h.00001"/></g><path d="m721.09493 243.8404v6.07226a5.93084 5.93084 0 0 0 5.93084-5.93084q0-.273-.02424-.53983c-.33229-3.68286-5.9066-3.29942-5.9066.39841z" fill="#edeeef"/><g fill="none" stroke-width="1.5"><path d="m721.09493 249.91266a5.93084 5.93084 0 0 0 5.93084-5.93084" stroke="#000" stroke-miterlimit="10"/><g stroke-linecap="round"><path d="m697.9005 254.41a3.92722 3.92722 0 0 0 5.55392 0" stroke="#ff6498" stroke-linejoin="round"/><path d="m693.11094 252.38084 3.83134.94168" stroke="#000" stroke-miterlimit="10"/></g></g><path d="m650.68871 340.90962v92.66643l131.274 32.265v-103.20512a79.49342 79.49342 0 0 0 -60.52-77.19593h-.00013a57.12045 57.12045 0 0 0 -70.75394 55.46958z" fill="#ff6498"/><g fill="none" stroke-width="1.5"><g stroke="#000" stroke-miterlimit="10"><path d="m711.77566 824.72518-40.90413-393.11317"/><path d="m716.7388 208.45162a30.76919 30.76919 0 0 1 21.52074 15.2c4.89861 9.045 5.68561 22.17611-14.19919 36.4188"/><path d="m695.02661 271.79793s0 19.01813-32.26982 17.30551l-7.38736-7.38737s4.08146-84.207 61.36937-73.26445"/></g><path d="m652.59341 284.6008c.3 0 7.4 7.4 7.4 7.4" stroke="#ff6498" stroke-linecap="round" stroke-linejoin="round"/><g stroke="#000" stroke-miterlimit="10"><path d="m681.45377 242.67043s19.34287-4.8 25.10644-16.6c0 0 6.30587 16.33993 14.53472 17.77"/><path d="m651.19045 288.3008s-20.4 11.503-16.93333 39.503a36.01337 36.01337 0 0 0 13.00226 23.6882 13.12461 13.12461 0 0 0 21.49985-8.69337c.60131-5.4489 1.75709-11.04317 3.89789-15.2615 8.79665-17.33333-17.70063-35.53629-17.70063-35.53629"/><path d="m754.76589 302.76556s130.95789 146.90487 3.75789 222.10487l-20.8-34.85842 29.6-53.94158-29.6-49.6"/><path d="m758.52378 524.87043-32.46045-54.4"/></g></g><path d="m601.99785 304.05947a25.45308 25.45308 0 0 1 1.49933-15.7118c6.14823-14.43486 22.96518-50.18479 39.14412-51.30494 20.2878-1.40462 13.8878 16.46205 6.6878 20.72872a11.88442 11.88442 0 0 1 -13.06666-.26667s-19.43211 23.61122-17.33334 30.93333c0 0 11.2 0 7.46667 10.66667-3.26667 9.33333-20.2125 22.95422-24.39792 4.95469z" fill="#ff6498"/><path d="m618.12378 274.92252s15.2-12.85209 0-17.25209-49.2 42.8-43.6 94.8 42.72985 86.4 76.16493 58" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1.5"/><path d="m618.67467 309.25458s2.46921 23.21585 10.15916 37.21585l8.65682-7.42672" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1.5"/><path d="m370.778 300.328-36.001 36.555v-36.555z"/><path d="m334.77681 336.88349v-36.55531"/><path d="m275.67469 146.2379h238.19926v159.89803h-238.19926z" transform="matrix(-1 0 0 -1 789.54864 452.37383)"/><path d="m275.675 146.238v159.898h59.102"/><path d="m434.41435 218.86601h14.64181v14.64181h-14.64181z" transform="matrix(-1 0 0 -1 883.47051 452.37383)"/><path d="m387.45341 218.86601h14.64181v14.64181h-14.64181z" transform="matrix(-1 0 0 -1 789.54864 452.37383)"/><path d="m340.49248 218.86601h14.64181v14.64181h-14.64181z" transform="matrix(-1 0 0 -1 695.62676 452.37383)"/><path d="m483.588 227.7 36.002 36.555v-36.555z" fill="#e2e2e2"/><path d="m519.58961 264.25538v-36.55531" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1.5"/><path d="m340.49248 73.60979h238.19926v159.89803h-238.19926z" fill="#edeeef"/><path d="m578.692 73.61v159.898h-59.102" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1.5"/><g fill="#ff6498"><path d="m405.31026 146.2379h14.64181v14.64181h-14.64181z"/><path d="m452.2712 146.2379h14.64181v14.64181h-14.64181z"/><path d="m499.23213 146.2379h14.64181v14.64181h-14.64181z"/></g><path d="m516.33034 841.21042h353.5612" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1.5"/><path d="m828.07544 838.42842s6.09215-10.77842-9.37254-13.12155a50.68964 50.68964 0 0 0 -27.18035 3.28039s10.77842-13.12155-6.09214-18.74507-34.20976 7.498-34.20976 7.498 16.87057-31.398 3.749-33.74112-20.15095 11.247-20.15095 11.247 1.40588-38.896-25.77447-39.83327-24.36859 49.67443-24.36859 49.67443-11.71564-22.49402-31.39798-23.43123-9.84116 37.67937-9.84116 37.67937-3.749-9.09314-16.87056-10.0304-12.18429 10.06061-12.18429 10.06061-16.87057-23.65078-35.61564-22.2449-10.77841 24.83722-10.77841 24.83722c-19.2137-1.40588-23.43134 19.65257-23.43134 19.65257h297.10935z"/><path d="m237.18437 354.59574h175.44679v175.44679h-175.44679z" fill="#edeeef"/><path d="m412.631 354.596v175.447h-175.447" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1.5"/><g fill="#ff6498"><path d="m307.53464 444.77193h34.74626a30.71605 30.71605 0 0 1 30.7161 30.71607v17.37313a0 0 0 0 1 0 0h-96.17842a0 0 0 0 1 0 0v-17.37313a30.71605 30.71605 0 0 1 30.71606-30.71607z"/><path d="m324.90775 391.77717a23.73161 23.73161 0 0 1 23.73161 23.73161v17.57422a0 0 0 0 1 0 0h-47.46323a0 0 0 0 1 0 0v-17.57422a23.73161 23.73161 0 0 1 23.73162-23.73161z"/></g></svg>,
    <IllustrationOne/>,
    <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="m626.596 148.43548h166.95608v301.42311h-166.95608z" fill="#edeeef"/><g fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1.5"><path d="m710.07404 146.49385v305.30638"/><path d="m626.596 449.859v-301.424h166.956"/><path d="m809.65523 248.14948h-199.16238"/><path d="m809.65523 350.1446h-199.16238"/></g><path d="m206.44792 148.43548h166.95608v301.42311h-166.95608z" fill="#edeeef"/><g fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1.5"><path d="m289.92596 146.49385v305.30638"/><path d="m206.448 449.859v-301.424h166.956"/><path d="m389.50715 248.14948h-199.16238"/><path d="m389.50715 350.1446h-199.16238"/></g><path d="m456.343 661.212v157.6l-10.4 22.398h71.309l23.091-220.798z" fill="#e2e2e2"/><path d="m472.186 431.612 110.703-6.417v120.015 296h-74.836l9.199-16.485z" fill="#edeeef"/><path d="m477.61123 234.881v14.78559a24.835 24.835 0 0 0 18.9074 24.11723l23.52877 5.783v-57.80863l-19.564-4.80849a18.465 18.465 0 0 0 -22.87217 17.9313z" fill="#edeeef"/><path d="m477.61123 249.66663a24.835 24.835 0 0 0 18.9074 24.11723l23.52877 5.783" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1.5"/><circle cx="501.58302" cy="245.59823" r="1.13465"/><circle cx="484.15561" cy="245.59823" r="1.13465"/><g fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1.5"><path d="m489.268 252.367v-17.486h-8.76"/><path d="m503.72056 234.88104h-8.75992"/><path d="m479.14507 232.01787h.00001"/></g><path d="m517.25239 243.84038v6.07226a5.93083 5.93083 0 0 0 5.93084-5.93083q0-.273-.02423-.53983c-.33229-3.68287-5.90661-3.29943-5.90661.3984z" fill="#edeeef"/><g fill="none" stroke-width="1.5"><path d="m517.25239 249.91264a5.93083 5.93083 0 0 0 5.93084-5.93083" stroke="#000" stroke-miterlimit="10"/><path d="m494.058 254.40994a3.92722 3.92722 0 0 0 5.55392 0" stroke="#ff6498" stroke-linecap="round" stroke-linejoin="round"/><g stroke="#000" stroke-miterlimit="10"><path d="m489.2684 252.38082 3.83134.94168" stroke-linecap="round"/><path d="m478.4599 229.32759s.6527-9.7156 9.4527-9.1156 21.4-.2 22.4 7.8 4.07959 14.4 6.93979 14.4"/><path d="m477.61123 240.86567s-31.15779-56.45367 23.97177-60.45367 81.07334 69.06667 18.63479 80.26667"/></g><g stroke="#ff6498" stroke-linecap="round" stroke-linejoin="round"><path d="m521.53155 254.1918a4.27916 4.27916 0 1 1 -4.27916-4.27916"/><path d="m477.61194 257.4738a4.27921 4.27921 0 1 1 -2.746-7.56116"/></g></g><path d="m582.88941 340.9096v92.6664l-131.274 32.265v-103.20508a79.49342 79.49342 0 0 1 60.52-77.19594h.00013a57.12046 57.12046 0 0 1 70.75394 55.46958z" fill="#edeeef"/><path d="m582.89 433.576-131.275 32.265v202.972l199.509-31.42z" fill="#ff6498"/><g fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1.5"><path d="m508.053 841.21 9.199-16.485-25.353-221.153"/><path d="m564.06229 298.531s62.68042 54.14766 21.61371 129.881-173.33333-32.53333-174.93333-41.06666 12.26666-10.66667 24-4.26667c0 0-1.6-8.73328 4.8-6.2333s9.6 9.96663 9.6 9.96663l90.13333 3.73334-11.73847-49.6"/><path d="m479.145 388.055-39.602-104.293-90.667 24.65 56 125.164 50.103-10.153"/></g><path d="m469.42826 432.129s50.57265 65.5957 125.34335 36.93925l-12.12656-35.6371c-24.34765 36.22694-73.63398 21.02479-113.21679-1.30215z"/><g fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1.5"><path d="m478.4599 303.07399-23.54302 21.17565"/><path d="m370.35033 356.40858s-14.80762 55.60342 20.39238 79.20342 60.87265 6 60.87265 6"/><path d="m741.476 668.89964v-116.86915a69.19 69.19 0 0 0 -11.3969-38.04228 76.906 76.906 0 0 0 -47.35634-32.74555l-1.16351-.26179s-3.14508 47.17627 47.96255 53.46644"/><path d="m741.476 684.62506v-116.86915a69.19 69.19 0 0 1 11.3969-38.04228 76.906 76.906 0 0 1 47.35633-32.74563l1.16351-.26179s3.14508 47.17627-47.96255 53.46644"/></g><path d="m730.07906 513.98828a76.90577 76.90577 0 0 0 -47.35633-32.74579l-1.1635-.26159s6.99064 49.001 58.0983 55.29095l1.81847 132.62779v-116.86924a69.18942 69.18942 0 0 0 -11.39694-38.04212z" fill="#edeeef"/><path d="m801.39272 496.70634-1.1635.26159a76.90642 76.90642 0 0 0 -47.35633 32.74553v.00026a69.18949 69.18949 0 0 0 -11.39689 38.04212v116.86925l2.90693-136.71345c51.10761-6.29023 57.00979-51.2053 57.00979-51.2053z" fill="#edeeef"/><path d="m741.476 660.76774v-67.88208a40.18826 40.18826 0 0 0 -6.61976-22.09642 44.66992 44.66992 0 0 0 -27.50637-19.01988l-.67581-.15206s-1.82679 27.40179 27.85848 31.05537" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1.5"/><path d="m702.1565 653.23484h78.63892v189.78164h-78.63892z" fill="#ff6498"/><path d="m211.68991 843.01648h395.49443" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1.5"/><circle cx="263.29891" cy="551.95231" fill="#ff6498" r="112.31849"/><path d="m150.98042 551.95231a112.31849 112.31849 0 0 1 224.637 0" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1.5"/><path d="m215.44447 623.65248h95.70888v81.23664h-95.70888z" fill="#ff6498"/><path d="m215.44447 671.33485h95.70888v33.55426h-95.70888z"/><g fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1.5"><path d="m263.29891 396.2402v26.84073"/><path d="m222.99765 401.54596 6.94689 25.92616"/><path d="m185.44285 417.10167 13.42037 23.24475"/><path d="m153.19382 441.84722 18.97926 18.97926"/><path d="m128.44827 474.09626 23.24475 13.42036"/><path d="m112.89256 511.65105 25.92615 6.94689"/><path d="m387.7791 518.59794 25.92616-6.94689"/><path d="m374.9048 487.51662 23.24475-13.42036"/><path d="m354.42474 460.82648 18.97926-18.97926"/><path d="m327.7346 440.34642 13.42036-23.24475"/><path d="m296.65328 427.47212 6.94689-25.92616"/></g></svg>,
    <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="m245.015 772.625 23.625 20.516 63.001-80.561 28.351 23.727 149.627-196.746 132.303 233.064 36.225-40.03 66.152 108.615h-554.41z" fill="#f4f4f4"/><path d="m764.16844 841.21043h-594.14949" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1.5"/><path d="m321.33266 431.576s-237.36475 301.32369 186.21407 290.52423l16.79916 14.39928v-101.10627l-145.13324-32.08707 17.0431-185.9907" fill="#ff6498"/><path d="m384.28991 547.90036c-43.82344 2.29882-78.916 60.74336-78.916 132.51445 0 1.57324.023 3.1375.05625 4.69726 32.31172 20.782 82.85625 34.78711 159.01992 36.9709a209.35652 209.35652 0 0 0 4.11563-41.66816 202.33347 202.33347 0 0 0 -8.58672-59.25234l-80.76641-17.85625z"/><path d="m342.68028 436.82293s-16.14966 263.58907 29.46333 388.38907l-9.52783 13.99844h81.12783s8.86309-335.27031 8.86309-407.63437z" fill="#ff6498"/><path d="m404.319 232.881v34.256l-42.436 10.43v-57.809l42.436-10.43z" fill="#edeeef"/><circle cx="380.3473" cy="243.59823" r="1.13465"/><circle cx="397.77471" cy="243.59823" r="1.13465"/><g fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1.5"><path d="m392.662 250.367v-17.486h8.76"/><path d="m378.20976 232.88104h8.75992"/><path d="m402.78525 230.01787h-.00001"/></g><path d="m364.67792 241.84038v6.07226a5.93084 5.93084 0 0 1 -5.93084-5.93083q0-.273.02424-.53983c.33229-3.68287 5.9066-3.29943 5.9066.3984z" fill="#edeeef"/><g fill="none" stroke-width="1.5"><path d="m364.67792 247.91264a5.93084 5.93084 0 0 1 -5.93084-5.93083" stroke="#000" stroke-miterlimit="10"/><path d="m388.83057 254.6775a6.00273 6.00273 0 0 1 -6.00273-6.00274" stroke="#ff6498" stroke-linecap="round" stroke-linejoin="round"/><g stroke="#000" stroke-miterlimit="10"><path d="m404.31908 267.13674-42.43617 10.4301"/><path d="m392.66192 250.38082-3.83135.94168" stroke-linecap="round"/></g></g><path d="m321.33266 338.9096v92.6664l131.274 32.265v-103.20508a79.49343 79.49343 0 0 0 -60.52-77.19594h-.00013a57.12046 57.12046 0 0 0 -70.75394 55.46958z" fill="#edeeef"/><g fill="none" stroke-width="1.5"><g stroke="#000" stroke-miterlimit="10"><path d="m342.68028 436.82293s-16.14966 263.58907 29.46333 388.38907"/><path d="m360.46839 239.08206s-5.70426-18.89616 3.29574-26.69616 48.8-5.8 48.8-5.8 2.8 27.6-38.2 21c0 0-.5958 7.64818-7.4 9"/><path d="m417.03779 294.37586s59.85967 38.41743 48.65967 142.44707-164.26667-27.70369-168.53333-37.30369 11.73333-17.6 31.46666-6.4c0 0-8-6.71634-4.26666-7.62484s11.348 1.75817 15.54067 10.2915l92.726 17.06667"/><path d="m323.999 387.386h-92.435l-40.533-93.709"/></g><path d="m196.7048 303.7859 143.2-77.6" stroke="#ff6498" stroke-linecap="round" stroke-linejoin="round"/><g stroke="#000" stroke-miterlimit="10"><path d="m338.98632 297.61961s-32.81085 30.96629-42.51652 89.76629"/><path d="m250.76413 387.3859s23.48851 66.53231 50.74425 73.06616"/><path d="m287.56413 387.3859s-11.58532-16.13333-19.25933-19.86666-30.874 4.8-27.94067 8.8 8.26666 1.86666 8.26666 1.86666-1.33333 4 1.06667 5.06667"/></g></g><path d="m761.26691 168.9899c.00648-.30712.01162-.61445.01162-.92291a42.52713 42.52713 0 0 0 -61.36926-38.11394 89.21038 89.21038 0 0 0 -162.39563 42.2637 81.00647 81.00647 0 0 0 -55.3262 76.82425v.00022a80.97427 80.97427 0 0 0 80.97423 80.97423h185.84515a80.97427 80.97427 0 0 0 80.97423-80.97423v-.00022a80.99317 80.99317 0 0 0 -68.71414-80.0511z" fill="#edeeef"/><g fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1.5"><path d="m699.90927 129.95305a89.107 89.107 0 0 0 -73.56557-38.74315"/><path d="m761.27853 168.067a42.5158 42.5158 0 0 0 -42.51576-42.51587"/><path d="m563.16167 330.01545h185.84515a80.97427 80.97427 0 0 0 80.97423-80.97423"/></g><path d="m613.05021 336.95123h86.06807v86.06807h-86.06807z" transform="matrix(-1 0 0 -1 1312.16849 759.97054)"/><path d="m722.716 343.439-66.632-66.632-66.632 66.632z"/><g fill="#d6d6d6"><path d="m613.05021 506.19154h86.06807v86.06807h-86.06807z" transform="matrix(-1 0 0 -1 1312.16849 1098.45116)"/><path d="m722.716 512.679-66.632-66.632-66.632 66.632z"/><path d="m613.27752 675.431h86.06807v86.06807h-86.06807z" transform="matrix(-.99997143 .00755895 -.00755895 -.99997143 1318.03519 1431.94853)"/><path d="m722.665 681.416-67.133-66.127-66.127 67.134z"/></g></svg>,
    <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="m532.441 826.991v-22.281l-20.566 18.853-6.855-59.128-53.987 38.561-6.855-25.707-18.853 18.852v-30.849l-23.137 27.421-20.566-61.698-25.708 63.455-37.705-47.174-28.278 64.27v-30.85l-16.282 29.993-11.14-40.276-30.849 47.988-47.131-59.128-14.568 58.271-13.711-16.281-10.283 40.36h395.9l3.428-15.509z" fill="#f4f4f4"/><path d="m123.64875 841.6433h443.96478" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1.5"/><path d="m597.006 535.264-139.672 56.742v-362.276l139.672-56.742z" fill="#edeeef"/><path d="m736.679 592.006-139.673-56.742v-362.276l139.673 56.742z" fill="#e2e2e2"/><path d="m597.0062 535.26402-139.67253 56.74196" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1.5"/><path d="m736.67872 592.00598-139.67252-56.74196" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1.5"/><path d="m876.351 535.264-139.672 56.742v-362.276l139.672-56.742z" fill="#ff6498"/><path d="m446.40116 822.51234s-15.33984-308.37222-30.42461-391.93628l-99.52382 13.37294 51.87027 394.26143h87.91641z" fill="#e2e2e2"/><path d="m416.30976 638.07869c-10.9125-18.90127-42.932-21.39663-75.27969-7.32021l12.275 93.30283a125.85384 125.85384 0 0 0 19.58672-9.18467c36.35039-20.98681 55.78906-55.37046 43.41797-76.79795z"/><path d="m284.70254 462.841s-11.18411 116.70118 57.09726 147.89962l-140.50819 79.196 29.9985 73.19634 10.79946-25.19874s176.39118-27.59862 185.9907-97.19514-55.50147-199.4966-55.50147-199.4966" fill="#edeeef"/><path d="m242.08957 737.93426s176.39118-27.59862 185.9907-97.19514-55.50147-199.4966-55.50147-199.4966" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1.5"/><path d="m330.143 231.881v34.256l42.436 10.43v-57.809l-42.436-10.43z" fill="#edeeef"/><circle cx="354.11442" cy="242.59828" r="1.13465"/><circle cx="336.68701" cy="242.59828" r="1.13465"/><g fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1.5"><path d="m341.8 249.367v-17.486h-8.76"/><path d="m356.25196 231.88109h-8.75992"/><path d="m331.67647 229.01792h.00001"/></g><path d="m369.78379 240.84043v6.07226a5.93083 5.93083 0 0 0 5.93084-5.93083q0-.273-.02424-.53984c-.33228-3.68286-5.9066-3.29942-5.9066.39841z" fill="#edeeef"/><g fill="none" stroke-width="1.5"><path d="m369.78379 246.91269a5.93083 5.93083 0 0 0 5.93084-5.93083" stroke="#000" stroke-miterlimit="10"/><path d="m345.63114 253.67755a6.00274 6.00274 0 0 0 6.00274-6.00274" stroke="#ff6498" stroke-linecap="round" stroke-linejoin="round"/><g stroke="#000" stroke-miterlimit="10"><path d="m330.14263 266.13679 42.43617 10.43009"/><path d="m341.7998 249.38087 3.83134.94168" stroke-linecap="round"/><path d="m330.143 231.881-3.051-29.869 50.8 5.2-5.143 30.654"/><path d="m333.03988 215.14538s13.05191 11.86666 30.51858 9.46666c0 0 1.11734 11.6 6.22533 14.26667"/></g></g><path d="m415.97657 337.90965v92.66643l-131.274 32.265v-103.20508a79.49342 79.49342 0 0 1 60.52-77.19594h.00013a57.12045 57.12045 0 0 1 70.75394 55.46958z" fill="#ff6498"/><path d="m310.07929 301.40518s-55.5875 49.60682-54.7875 116.80682c.67 56.28186 133.02607 9.87106 176.01678-6.69557a32.06839 32.06839 0 0 0 18.36863-18.34986l4.78053-12.34424 13.63406-5.54366v-7.46667l-132.52379 17.06671 16.304-38.4" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1.5"/><path d="m289.35663 445.05106c10.29883 4.92729 24.26641 7.961 39.6625 7.961 29.652 0 54.04414-11.23188 57.01992-25.63271-31.73125 9.98455-69.82105 19.39012-96.68242 17.67171z"/><path d="m465.18572 364.16134c10.76886-22.41475 28.47129-57.22718 37.0394-62.75616a39.35687 39.35687 0 0 1 25.6-6.12647v6.12647l-9.6 5.60686s6.4 17.6-6.4 25.06667c0 0-2.8971 163.92808-95.84855 98.49737" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1.5"/><path d="m408.22411 309.12647 39.49339 60.99142" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1.5"/><circle cx="597.0062" cy="569.75964" fill="#ff6498" r="60.32677"/><g fill="none" stroke-miterlimit="10" stroke-width="1.5"><path d="m657.333 569.75964a60.32677 60.32677 0 0 1 -60.32677 60.32677" stroke="#000"/><path d="m551.00359 569.75964a46.0026 46.0026 0 0 1 46.00261-46.00264" stroke="#fff"/><g stroke="#000"><path d="m597.0062 630.08641v211.55689"/><path d="m529.38542 841.6433h135.24156"/></g></g></svg>
  ]

  const [carrouselOn, setCarrouselOn] = useState(false)

  const firstSlide = props.pages[props.pagePos].slides[0]
  return (
    <Layout anchor={props.pages[props.pagePos].anchor}>

      <Slide currentSlide={firstSlide}>
       {/**/}

        {/*<div className="h-full flex flex-wrap items-center justify-between">
          <div className={"w-full lg:w-6/12"}>
            <div className={"text-3xl md:text-4xl lg:text-5xl " + firstSlide.colors.textColor}
                 dangerouslySetInnerHTML={{
                   __html: firstSlide.html
                 }}
            />
            <a href={"#" + props.pages[props.pagePos].anchor + "/" + props.pages[props.pagePos].slides[1].anchor}
               className={"text-4xl md:text-5xl lg:text-6xl " + firstSlide.titleColor}
               onClick={(e) => {
                 e.preventDefault()
                 props.fullPageApi.moveTo(props.pages[props.pagePos].anchor, props.pages[props.pagePos].slides[1].anchor)
               }}>
              <span className="pulsing"><IoIosArrowForward/></span>
            </a>
          </div>
          <div className="w-full lg:w-1/3">
            <MagnesiumTipografico size={props.size}/>
            <TablaPeriodica size={props.size}/>
            <img className="self-center w-full" src={tablaPeriodica} alt="Magnesium.coop logo"/>
          </div>
        </div>*/}
        <AnimatedIntro slides={props.pages[props.pagePos].slides}/>
      </Slide>
     {/* {props.pages[props.pagePos].slides.map((slide) => {
        if (slide.order === 0) {
          return null
        } else {
          return (
            <Slide currentSlide={slide}>
              <div className="h-full flex flex-wrap items-center justify-around">
                <div className={"w-full lg:w-6/12"}>
                  <div className={"text-3xl md:text-4xl lg:text-5xl " + slide.textColor}
                       dangerouslySetInnerHTML={{
                         __html: slide.html
                       }}
                  />
                </div>
                <div
                  className={"w-full lg:w-3/12 font-mgannotated text-naranja leading-tight text-center text-2xl md:text-3xl lg:text-4xl"}
                  dangerouslySetInnerHTML={{ __html: slide.annotation }}/>
                <div className="w-full lg:w-4/12">
                  {illustrations[slide.order]}
                </div>
              </div>
            </Slide>
          )
        }
      })}*/}
    </Layout>
  )
}

export default SimpleIntroPage