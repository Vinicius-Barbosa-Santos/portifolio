import React, { useEffect } from "react";

type ModalProps = {
    open: boolean;
    title?: string;
    onClose: () => void;
    children?: React.ReactNode;
    actions?: React.ReactNode;
};

export default function Modal({ open, title, onClose, children, actions }: ModalProps) {
    if (!open) return null;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [onClose]);

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
                aria-hidden="true"
            />
            <div
                role="dialog"
                aria-modal="true"
                className="relative z-[101] w-full max-w-lg rounded-2xl bg-slate-900 p-6 text-white ring-1 ring-white/10 shadow-2xl"
            >
                <div className="mb-4 flex items-start justify-between">
                    <h3 className="text-xl font-bold">{title}</h3>
                    <button
                        className="rounded-md bg-white/10 px-3 py-1 text-sm hover:bg-white/20"
                        onClick={onClose}
                        aria-label="Fechar modal"
                    >
                        Fechar
                    </button>
                </div>
                <div className="space-y-4">{children}</div>
                {actions && <div className="mt-6 flex items-center justify-end gap-3">{actions}</div>}
            </div>
        </div>
    );
}