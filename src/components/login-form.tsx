import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';

export function LoginForm({ className, ...props }: React.ComponentProps<'div'>) {
  const { login } = useAuth();
  const [loginField, setLoginField] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(loginField, password);
  };

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card className="overflow-hidden">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Bem vindo de volta!</h1>
                <p className="text-balance text-muted-foreground">
                  Você pode entrar com seu e-mail ou CPF
                </p>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">E-mail ou CPF</Label>
                <Input
                  id="login"
                  type="text"
                  value={loginField}
                  onChange={(e) => setLoginField(e.target.value)}
                  placeholder="m@example.com"
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="password">Senha</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <Button id="loginBnt" type="submit" className="w-full">
                Login
              </Button>
            </div>
          </form>

          <div className="relative hidden bg-muted md:block">
            <img
              src="https://www.sescpr.com.br/wp-content/uploads/2019/02/Sem-t%C3%ADtulo-1.jpg"
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
