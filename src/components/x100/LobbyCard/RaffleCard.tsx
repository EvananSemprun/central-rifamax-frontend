import useAuth from "@hooks/useAuth";
import RaffleCardContent from "./RaffleCardContent";
import { rgba } from "@mantine/core";
import { AxiosResponse } from "axios";
import { motion } from "framer-motion";
import { IRaffleCard } from "@interfaces/index";
import { useQuery } from "@tanstack/react-query";
import { getProgress } from "@api/x100/Raffles.request";
import { IGetProgressResponse } from "@interfaces/requests.interfaces";

const RaffleCard: React.FC<IRaffleCard> = ({ raffle }: IRaffleCard) => {
  const { token } = useAuth();

  const { data: request, isPending } = useQuery<AxiosResponse<IGetProgressResponse>>({
    queryKey: ['raffle', 'progress', raffle.id],
    queryFn: () => getProgress({ token: token, raffleId: raffle.id})
  })

  return (
    <motion.div
      style={{ 
        position: 'absolute',
        width: '100%',
        height: '100%',
        padding: '0 7px 20% 7px',
        top: '-100%',
        right: 0,
        background: rgba('0, 0, 0', 0.8),
      }}
      animate={{ top: '0%' }}
    >
      <RaffleCardContent
        raffle={raffle}
        request={request}
        isPending={isPending}
      />
    </motion.div>
  );
};

export default RaffleCard;
