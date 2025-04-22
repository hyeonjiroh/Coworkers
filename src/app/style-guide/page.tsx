export default function StyleGuide() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center px-4">
      <strong className="text-2xl-semibold mt-16">폰트사이즈</strong>
      <div className="mt-6 mb-10 flex w-full max-w-[800px] flex-col items-center justify-center">
        {/* 폰트 리스트 */}
        <p className="text-4xl-medium font-(--font-montserrat)">
          font-(--font-montserrat)
        </p>
        <p className="text-4xl-medium">Pretendard 4XL Medium (40px / 48px)</p>
        <p className="text-3xl-bold">Pretendard 3XL Bold (32px / 38px)</p>
        <p className="text-3xl-semibold">
          Pretendard 3XL Semibold (32px / 38px)
        </p>
        <p className="text-2xl-bold">Pretendard 2XL Bold (24px / 28px)</p>
        <p className="text-2xl-semibold">
          Pretendard 2XL Semibold (24px / 28px)
        </p>
        <p className="text-2xl-medium">Pretendard 2XL Medium (24px / 28px)</p>
        <p className="text-2xl-regular">Pretendard 2XL Regular (24px / 28px)</p>
        <p className="text-xl-bold">Pretendard XL Bold (20px / 24px)</p>
        <p className="text-xl-semibold">Pretendard XL Semibold (20px / 24px)</p>
        <p className="text-xl-medium">Pretendard XL Medium (20px / 24px)</p>
        <p className="text-xl-regular">Pretendard XL Regular (20px / 24px)</p>
        <p className="text-2lg-bold">Pretendard 2LG Bold (18px / 21px)</p>
        <p className="text-2lg-semibold">
          Pretendard 2LG Semibold (18px / 21px)
        </p>
        <p className="text-2lg-medium">Pretendard 2LG Medium (18px / 21px)</p>
        <p className="text-2lg-regular">Pretendard 2LG Regular (18px / 21px)</p>
        <p className="text-lg-bold">Pretendard LG Bold (16px / 19px)</p>
        <p className="text-lg-semibold">Pretendard LG Semibold (16px / 19px)</p>
        <p className="text-lg-medium">Pretendard LG Medium (16px / 19px)</p>
        <p className="text-lg-regular">Pretendard LG Regular (16px / 19px)</p>
        <p className="text-md-bold">Pretendard MD Bold (14px / 17px)</p>
        <p className="text-md-semibold">Pretendard MD Semibold (14px / 17px)</p>
        <p className="text-md-medium">Pretendard MD Medium (14px / 17px)</p>
        <p className="text-md-regular">Pretendard MD Regular (14px / 17px)</p>
        <p className="text-sm-semibold">Pretendard SM Semibold (13px / 16px)</p>
        <p className="text-sm-medium">Pretendard SM Medium (13px / 16px)</p>
        <p className="text-xs-semibold">Pretendard XS Semibold (12px / 14px)</p>
        <p className="text-xs-medium">Pretendard XS Medium (12px / 14px)</p>
        <p className="text-xs-regular">Pretendard XS Regular (12px / 14px)</p>
      </div>

      <strong className="text-2xl-semibold mt-16 block">컬러 가이드</strong>

      {/* Green */}
      <strong className="text-xl-semibold mt-6 block">green</strong>
      <div className="my-6 grid gap-4">
        <div className="rounded bg-green-900 p-3 text-white">
          bg-green-900 / Interaction-Pressed
        </div>
        <div className="rounded bg-green-800 p-3 text-white">
          bg-green-800 / Interaction-Hover
        </div>
        <div className="rounded bg-green-700 p-3 text-white">
          bg-green-700 / brand-primary / Interaction-Focus
        </div>
        <div className="rounded bg-green-600 p-3 text-white">
          bg-green-600 / brand-secondary
        </div>
        <div className="rounded bg-green-500 p-3 text-white">
          bg-green-500 / brand-teriary
        </div>
        <div className="rounded bg-[linear-gradient(90deg,#10b981_0%,#a3e635_100%)] p-3 text-white">
          bg-[linear-gradient(90deg,#10b981_0%,#a3e635_100%)]
        </div>
        {/* <div className="rounded bg-linear-(--green-gradient) p-3 text-white">
            bg-linear-(--green-gradient)
          </div> */}
      </div>

      {/* Point */}
      <strong className="text-xl-semibold mt-6 block">Point</strong>
      <div className="my-6 grid gap-4">
        <div className="bg-point-purple rounded p-3 text-white">
          bg-point-purple
        </div>
        <div className="bg-point-blue rounded p-3 text-white">
          bg-point-blue
        </div>
        <div className="bg-point-cyan rounded p-3 text-white">
          bg-point-cyan
        </div>
        <div className="bg-point-pink rounded p-3 text-white">
          bg-point-pink
        </div>
        <div className="bg-point-rose rounded p-3 text-white">
          bg-point-rose
        </div>
        <div className="bg-point-orange rounded p-3 text-white">
          bg-point-orange
        </div>
        <div className="bg-point-yellow rounded p-3 text-white">
          bg-point-yellow
        </div>
      </div>

      {/* Gray */}
      <strong className="text-xl-semibold mt-6 block">Gray</strong>
      <div className="my-6 grid gap-4">
        <div className="rounded bg-black p-3 text-white">bg-black</div>
        <div className="rounded bg-gray-900 p-3 text-white">bg-gray-900</div>
        <div className="rounded bg-gray-800 p-3 text-white">bg-gray-800</div>
        <div className="bg-gray-750 rounded p-3 text-white">
          bg-gray-750 / Border-Primary
        </div>
        <div className="rounded bg-gray-700 p-3 text-white">bg-gray-700</div>
        <div className="rounded bg-gray-600 p-3 text-black">bg-gray-600</div>
        <div className="rounded bg-gray-500 p-3 text-black">bg-gray-500</div>
        <div className="rounded bg-gray-400 p-3 text-black">bg-gray-400</div>
        <div className="rounded bg-gray-300 p-3 text-black">bg-gray-300</div>
        <div className="rounded border bg-white p-3 text-black">bg-white</div>
      </div>

      {/* Slate */}
      <strong className="text-xl-semibold mt-6 block">Slate</strong>
      <div className="my-6 grid gap-4">
        <div className="rounded bg-slate-50 p-3 text-black">
          bg-slate-50 / text-primary
        </div>
        <div className="rounded bg-slate-100 p-3 text-black">
          bg-slate-100 / text-secondary
        </div>
        <div className="rounded bg-slate-200 p-3 text-black">
          bg-slate-200 / text-teriary
        </div>
        <div className="rounded bg-slate-300 p-3 text-black">bg-slate-300</div>
        <div className="rounded bg-slate-400 p-3 text-black">
          bg-slate-400 / text-disabled / Interaction-Inactive
        </div>
        <div className="rounded bg-slate-500 p-3 text-white">
          bg-slate-500 / text-dafault
        </div>
        <div className="rounded bg-slate-600 p-3 text-white">bg-slate-600</div>
        <div className="rounded bg-slate-700 p-3 text-white">
          bg-slate-700 / bg-teriary
        </div>
        <div className="rounded bg-slate-800 p-3 text-white">
          bg-slate-800 / bg-secondary
        </div>
        <div className="rounded bg-slate-900 p-3 text-white">
          bg-slate-900 / bg-primary
        </div>
        <div className="rounded bg-slate-950 p-3 text-white">bg-slate-950</div>
      </div>

      {/* Status */}
      <strong className="text-xl-semibold mt-6 block">Status</strong>
      <div className="my-6 grid gap-4">
        <div className="bg-success rounded p-3 text-white">bg-success</div>
        <div className="bg-danger rounded p-3 text-white">bg-danger</div>
        <div className="bg-warning rounded p-3 text-white">bg-warning</div>
      </div>
    </div>
  );
}
