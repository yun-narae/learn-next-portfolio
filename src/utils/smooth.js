import Lenis from "@studio-freight/lenis";
import debounce from "lodash.debounce"; // lodash.debounce 불러오기

const smooth = () => {
    const lenis = new Lenis({
        duration: 1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: "vertical",
        gestureDirection: "vertical",
        smooth: true,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // debounce 적용된 scroll 이벤트 핸들러
    lenis.on(
        "scroll",
        debounce((e) => {
            console.log(e);
        }, 200) // 200ms 지연 후 실행
    );
};

export default smooth;
