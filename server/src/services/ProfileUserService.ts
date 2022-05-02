import prismaClient from "../prisma"

class ProfileUserService{
    async execute(user_id: string){
        const user = prismaClient.user.findFirst({
            where: {
                id: user_id
            },
            include: {
                messages: true
            }
        });

        return user;
    }
}

export { ProfileUserService }