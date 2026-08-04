export default function Loading() {
  return (
    <div className="grid min-h-[52vh] place-items-center bg-white" role="status" aria-label="Carregando página">
      <div className="text-center">
        <span className="medx-loader mx-auto block" aria-hidden="true" />
        <strong className="mt-5 block text-sm tracking-[0.22em] text-emerald-950">MED-X</strong>
        <span className="mt-2 block text-xs text-slate-500">Preparando seu atendimento</span>
      </div>
    </div>
  );
}
