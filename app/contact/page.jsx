export const metadata = {
  title: 'Contact | NEXUS',
};

export default function ContactPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-base max-w-2xl">
        <p className="mb-3 text-xs tracking-[0.2em] text-accent">CONTACT</p>
        <h1 className="mb-6 text-3xl font-semibold md:text-4xl">お問い合わせ</h1>
        <p className="mb-8 text-sm text-paper/75 md:text-base">
          プロジェクトのご相談やお見積もり依頼など、お気軽にご連絡ください。
        </p>
        <form className="space-y-5 rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
          <label className="block">
            <span className="mb-2 block text-sm">お名前</span>
            <input
              type="text"
              className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-accent"
              placeholder="山田 太郎"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm">会社名</span>
            <input
              type="text"
              className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-accent"
              placeholder="株式会社NEXUS"
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
              rows={6}
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
