import { AuthProvider } from "../Providers";

export default function AdminLayout({ children }: any) {
  return <AuthProvider>{children}</AuthProvider>;
}
