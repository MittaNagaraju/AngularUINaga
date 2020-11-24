export const config = {
  apiUrl: 'http://127.0.0.1:8000',
  authRoles: {
    admin: ['DO'], // Only Director-operations has access
    user: ['PM'], // Only Plant Manager has access
  }
  /* authRoles: {
    sa: ['SA'], // Only Super Admin has access
    admin: ['SA', 'Admin'], // Only SA & Admin has access
    editor: ['SA', 'Admin', 'Editor'], // Only SA & Admin & Editor has access
    user: ['SA', 'Admin', 'Editor', 'User'], // Only SA & Admin & Editor & User has access
    guest: ['SA', 'Admin', 'Editor', 'User', 'Guest'] // Everyone has access
  } */
}