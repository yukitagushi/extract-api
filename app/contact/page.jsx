export const metadata = {
  title: 'Contact | Company',
};

export default function ContactPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-base max-w-2xl">
        <h1 className="mb-6 text-3xl font-semibold">Contact</h1>
        <p className="mb-8 text-sm text-paper/75 md:text-base">
          ご相談・ご依頼は以下フォームよりお気軽にお問い合わせください。
        </p>
        <form className="space-y-5 rounded-2xl border border-white/10 p-6 md:p-8">
          <label className="block">
            <span className="mb-2 block text-sm">お名前</span>
            <input
              type="text"
              className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-accent"
              placeholder="山田 太郎"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm">メールアドレス</span>
            <input
              type="email"
              className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-accent"
              placeholder="example@company.com"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm">お問い合わせ内容</span>
            <textarea
              rows={5}
              className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-accent"
              placeholder="お問い合わせ内容を入力してください"
            />
          </label>
          <button
            type="submit"
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-base transition hover:opacity-90"
          >
            送信する
          </button>
        </form>
      </div>
    </section>
  );
}
