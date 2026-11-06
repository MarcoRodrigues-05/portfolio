// IndexedDB storage so photos and videos (large files) fit in the browser.
export type Midia = { tipo: "imagem" | "video"; arquivo: Blob };
export type Projeto = {
  id: string;
  nome: string;
  descricao: string;
  tecnologias: string;
  repo: string;
  demo: string;
  capa?: Blob | undefined;
  galeria: Midia[];
  criado: number;
};

const DB = "portfolio";
const STORE = "projetos";
function abrir(): Promise<IDBDatabase> {
  return new Promise((res, rej) => {
    const r = indexedDB.open(DB, 1);
    r.onupgradeneeded = () => r.result.createObjectStore(STORE, { keyPath: "id" });
    r.onsuccess = () => res(r.result);
    r.onerror = () => rej(r.error);
  });
}
async function tx<T>(
  modo: IDBTransactionMode,
  fn: (s: IDBObjectStore) => IDBRequest<T>,
): Promise<T> {
  const db = await abrir();
  return new Promise((res, rej) => {
    const req = fn(db.transaction(STORE, modo).objectStore(STORE));
    req.onsuccess = () => res(req.result);
    req.onerror = () => rej(req.error);
  });
}
export const listar = async () =>
  ((await tx("readonly", (s) => s.getAll())) as Projeto[]).sort((a, b) => b.criado - a.criado);
export const salvar = (p: Projeto) => tx("readwrite", (s) => s.put(p));
export const remover = (id: string) => tx("readwrite", (s) => s.delete(id));
