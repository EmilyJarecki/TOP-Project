export default function PositivesCounter({ count }) {

    return (

        <>
            <p className="bg-[#5B83CB] text-[#FAFBFF] text-[11.25px] mt-[42px] mb-[24px] py-[4px] px-[12px] rounded-full">{count.toLocaleString('en-US')} positive tests today</p>
        </>

    )

}