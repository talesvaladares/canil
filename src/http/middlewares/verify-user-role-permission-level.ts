import { FastifyReply, FastifyRequest } from 'fastify';

type Role = 'ADMIN' | 'MEMBER' | 'EMPLOYEE';

function rolePermissionLevel(role: Role) {

  const level = {
    'ADMIN': 3,
    'EMPLOYEE': 2,
    'MEMBER' : 1
  }

  return level[role];

}

interface VerifyUserRolePermissionLevelProps {
  permissionLevel: number
}

export function verifyUserRolePermissionLevel({ permissionLevel = 1}: VerifyUserRolePermissionLevelProps ) {
  return async (request: FastifyRequest, response: FastifyReply) => {
    
    const { role } = request.user;

    if (rolePermissionLevel(role) < permissionLevel) {
      return response.status(401).send({
        message: 'Unauthorized.',
      });
    }
  };
}