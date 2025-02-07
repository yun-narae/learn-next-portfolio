import Lenis from "@studio-freight/lenis";
import debounce from "lodash.debounce"; // lodash.debounce 불러오기

const smooth = () => {
    const smooth = new Lenis({
        duration: 1.5, // 좀 더 느리게, 스크롤 시간이 길어짐
        easing: (t) => Math.min(1, 1.8 - Math.pow(2, -10 * t)), // 더 강렬한 easing 효과
        smoothWheel: true, // 마우스 휠의 스크롤을 부드럽게 처리
        smoothTouch: true, // 터치 스크롤도 부드럽게 처리
    });

    function raf(time) {
        smooth.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // 스크롤 이벤트 디바운스 처리
    const handleScroll = debounce((e) => {
        console.log("Smooth Scroll Event:", e);
        // 스크롤 위치를 화면에 표시 (디버깅용)
        console.log("Scroll Position:", e.scroll);
    }, 200); // 200ms 간격으로 이벤트 처리

    smooth.on("scroll", handleScroll); // 디바운스된 스크롤 이벤트 핸들러 적용
};

export default smooth;